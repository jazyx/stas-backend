/**
 * database/models/Film.js
*/

const { Schema, model } = require('mongoose')

const required = true
const SRT = new Schema({
  lang: { type: String, required },
  file: { type: String, required },
  name: { type: String }
});

const schema = Schema({
  title: { type: String, required },
  videoId: { type: String, required },
  thumbnail: { type: String, required },
  year: { type: Number, required },
  width: { type: Number, required },
  height: { type: Number, required },
  languages: { type: [SRT], required }
})

const Film = model("Film", schema)

module.exports = Film