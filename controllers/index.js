/* controllers/index.js */

const addFilm = require('./addFilm.js')
const getFilm = require('./getFilm.js')
const findFilms = require('./findFilms.js')
const getSRT = require('./getSRT.js')
const getLanguages = require('./getLanguages.js')
const sample = require('./sample.js')

module.exports = {
  addFilm,
  getFilm,
  findFilms,
  getSRT,
  getLanguages,
  sample
}