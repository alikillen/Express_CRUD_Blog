// utilities stores helper functions
// defines core logic for routes (similar to Model in MVC arch?)
// we have to read the blog_posts.json file in from here
// when we get post by ID, the id comes from the client as a parameter, like we saw in rails

// In addition to the two utility functions to get blog post data, we will use some helper functions (loadData, and getDataFileRelativeToApp).

// behaviour of require to read in and parse JSON files - require caches the data
// so if we are using a test file, and we setup/teardown between tests to update JSON file, using require may not work
// so we will define a loadData function using fs. we will use it when testing
// we need getDataFileRelativeToApp because when we use fs, the file path is relative to the app itself - index.js

let dataFile = "../data/blog_posts.json"
let blogPosts = require(dataFile)

const getAllPosts = function(req) {
  return blogPosts
}

// setting getPostById const as a function that takes in the request and matches it with a specific blog post
const getPostById = function(req) {
  let post = blogPosts[req.params.id]
  if (post) return post
  else req.error = "Post not found"
}
// passing the error back from this utility func by adding it to the request object
// so this will send an error message back to the route handler

// Allows flexibility for testing
// Loads data from dataFile with fs

function loadData(path) {
  blogPosts = JSON.parse(fs.readFileSync(path, 'utf8'))
}

const getDataFileRelativeToApp = function(file) {
	// Remove the ../ from the dataFile path for writing
	// because the writeFile looks for path relative to the app, not utilities.js
	return file.substring(file.lastIndexOf("../") + 3, file.length)
}

module.exports = {
	getAllPosts,
	getPostById,
	loadData,
	getDataFileRelativeToApp
}