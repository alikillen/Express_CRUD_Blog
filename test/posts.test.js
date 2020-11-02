// unlike rails, we manually setup and tear down when we test
// including setting up our test data

// data needs to be freshly setup for each test - so tests are not brittle
// if running tests in a specific order, or test are dependent on outside data, small changes can break our tests

const expect = require("expect")
const fs = require("fs")
const utilities = require("../utils/utilities")

// use test data file
const testDataFile = "../data/blog_posts.test.json"

// when we write to the file, the path is relative to index.js

const testDataFileForWrite = utilities.getDataFileRelativeToApp(testDataFile)

beforeEach(()=> {
  // setup and load data from test data file
  setupData()
})

describe("getAllPosts with one post", () => {
	it("should get a post if one exists", () => {
		// Pass an empty req object
		expect(Object.keys(utilities.getAllPosts({})).length).toBe(1)
	})
	it("user of first post should be tester", () => {
		expect(utilities.getAllPosts({})["1"].username).toBe("tester")
	})
})

describe("getPostById", ()=>{
  // define a request object with the expected structure to pass a param
  const req = {
    params: {
      id: "1"
    }}
    it("user of post with id 1 should be tester", ()=> {
      expect(utilities.getPostById(req).username).toBe("tester")
    })
  })

  // Setup and tear down functions
function setupData() {
	let testPostData = {}
	let testPost = {}
	let date = Date.now()
	testPost.title = "Test post 1"
	testPost.username = "tester"
	testPost.create_date = date
	testPost.modified_date = date
	testPost.content = "This is the first test post"
	testPost.category = ""
	testPostData["1"] = testPost

	fs.writeFileSync(testDataFileRelative, JSON.stringify(testPostData))
	utilities.loadFile(testDataFileRelative)
}