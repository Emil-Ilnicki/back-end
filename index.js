const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const foodAppRouter = require("./routes/post")
const PORT = 8080
const app = express()

app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:27017/recipedb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const connection = mongoose.connection

connection.once('open', () => {
    console.log("MongoDB database connection established successfully!")
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(foodAppRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})