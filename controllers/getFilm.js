/* controllers/getFilm.js */

const { Film } = require('../database')


function getFilm(req, res) {
  const { videoId } = req.body

  let message

  Film.findOne({ videoId })
    .then(treatSuccess)
    .catch(treatError)
    .finally(proceed)

  function treatSuccess(film) {
    // film may be null if videoId does not match any
    message = JSON.stringify(film, null, "  ")
  }

  function treatError(error) {
    res.status(500)
    message = `ERROR: getFilm for "${videoId}" failed
${error}`
  }

  function proceed () {
    res.send(message )
  }
}


module.exports = getFilm
