/* controllers/index.js */

const addFilm = require('./addFilm.js')
const getFilm = require('./getFilm.js')
const findFilms = require('./findFilms.js')
const getSRT = require('./getSRT.js')

module.exports = {
  addFilm,
  getFilm,
  findFilms,
  getSRT
}