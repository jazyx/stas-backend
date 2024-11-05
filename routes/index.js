/* routes/index.js */


const {
  addFilm,
  getFilm,
  findFilms,
  getSRT
} = require('../controllers')


const routes = app => {
  app.post('/film/add', addFilm)
  app.get('/film/get', getFilm)
  app.get('/film/find', findFilms)
  app.get('/film/srt', getSRT)
}


module.exports = routes