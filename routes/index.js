/* routes/index.js */


const {
  addFilm,
  getFilm,
  findFilms,
  getSRT,
  getLanguages,
  sample
} = require('../controllers')


const routes = app => {
  app.post('/film/add', addFilm)
  app.get('/film/get', getFilm)
  app.get('/film/find', findFilms)
  app.get('/film/srt', getSRT)
  app.get('/film/lang', getLanguages)
  app.get('/film/sample', sample)
}


module.exports = routes