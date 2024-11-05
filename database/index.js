/**
 * database/index.js
 *
 * Uses the mongoose module to connect to the MongoDB database
 * and imports all the models that mongoose will need.
 * 
 * Exports an object with entries for mongoose and all the models.
 */


const DB = process.env.DB

const mongoose = require('mongoose')
const Film = require("./models/Film.js")

mongoose
  .connect(DB)
  .then(() => {
    console.log(`Connected to ${DB}`)

  })
  .catch( error => {
    console.log("DB connection ERROR:",
error)
    process.exit()
  })


const db = {
  mongoose,
  Film
}


module.exports = db
