/* controllers/addFilm.js */

const { Film } = require('../database')


function addFilm(req, res) {
  const {
    title,
    videoId,
    thumbnail,
    year,
    width,
    height,
    languages
  } = req.body

  const filmData = {
    title,
    videoId,
    thumbnail,
    year,
    width,
    height,
    languages
  }

  let message

  new Film(filmData)
    .save()
    .then(treatSuccess)
    .catch(treatError)
    .finally(proceed)

  function treatSuccess(film) {
    message = {
      message: "Film record created",
      film
    }
    message = JSON.stringify(message, null, "  ")
  }

  function treatError(error) {
    message = `ERROR: Film record for "${title}" not saved
${error}`
  }

  function proceed () {
    res.send(message )
  }
}


module.exports = addFilm
