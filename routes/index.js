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
  app.post('/add', addFilm)
  app.get('/get', getFilm)
  app.get('/find', findFilms)
  app.get('/srt', getSRT)
  app.get('/lang', getLanguages)
  app.get('/sample', sample)
}


module.exports = routes