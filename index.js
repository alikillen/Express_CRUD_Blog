
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
// setup router
const postRouter = require("./routes/posts_routes")

const port = 3000

// define the application and enable middleware
const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use("/posts", postRouter)

app.listen(port, ()=> {
  console.log(`Blog express app listening on port ${port}`)
})