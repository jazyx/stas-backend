/**
 * database/models/Film.js
*/

const { Schema, model } = require('mongoose')

const required = true
const srtScheme = new Schema({
  lang: { type: String, required },
  file: { type: String, required },
  offset: { type: Number, default: 0},
  name: { type: [String], default: undefined },
  blurb: { type: String }
});

const schema = Schema({
  title: { type: String, required },
  videoId: { type: String, required },
  thumbnail: { type: String, required },
  year: { type: Number, required },
  width: { type: Number, required },
  height: { type: Number, required },
  languages: { type: [srtScheme], required }
})

const Film = model("Film", schema)

module.exports = Film