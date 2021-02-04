const mongoose = require("mongoose")


const recipeSchema = new mongoose.Schema({
            ingredients: [],
            time: String,
            name: String
        }
);

const recipes = mongoose.model("recipedb", recipeSchema)
module.exports = recipes