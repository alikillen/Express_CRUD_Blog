// router file stores the router creation for the blog posts routes.

const express = require("express")
const router = express.Router()

const {getPosts, getPost} = require("../controllers/posts_controller")

// read routes are simpler to implement and test, so we will start with them
// READ BLOGS
// GET on '/posts'
// Returns all posts
router.get("/", getPosts)

// READ 1 BLOG
// GET on '/posts/:id'
// Returns post with given id
router.get("/:id", getPost)

// CREATE
// POST on '/posts'
// Creates a new post

// DELETE
// DELETE on '/posts/:id'
// Deletes a post with id

// UPDATE
// PUT on 'posts/:id'
// Updates a post with id




// export the router

module.exports = router