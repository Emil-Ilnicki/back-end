const express = require('express');
const recipeModel = require('../models/recipeModel')
const cors = require('cors')
// mongodb model here
const app = express();
app.use(cors())

app.post('/addRecipe', async (req, res) => {
  const recipe = recipeModel(req.body)
  console.log(recipe)

  try {
    await recipe.save()
    res.send(recipe)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.get('/getRecipes', async(_, res) => {
    const recipe = await recipeModel.find({})
    const JSONstring = JSON.stringify(recipe)

    try{
      res.send(recipe)
    } catch (err) {
      res.status(500).send(err)
    }
})

app.post('/deleteRecipe', async(req, res) => {
  const { name } = req.body
  console.log("Deleting Recipe: ", name)
  const exisitingRecipe = await recipeModel.deleteOne({name: name})

  try {
    res.send(exisitingRecipe)
  } catch (err) {
    res.status(500).send(err)
  }

  


})

// POST: Takes in food api call data and stores it in mongo

// POST: Takes all register information and stores it in mongo

// POST: Takes all recipe information from form and stores it in mongo

// POST: Delete an entry from the repo by removing it in mongo

// GET: Gets all food data in repo

// GET: Checks if user name already exists (Register)

// GET: Check if user name and password already exists (Login)

module.exports = app