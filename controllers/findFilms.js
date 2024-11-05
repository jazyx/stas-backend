/* controllers/findFilms.js */

const { Film } = require('../database')


function findFilms(req, res) {
  const query = req.body

  let message

  Film.find(query)
    .then(treatSuccess)
    .catch(treatError)
    .finally(proceed)

  function treatSuccess(films) {
    // films may be [] if no films match the query
    message = JSON.stringify(films, null, "  ")
  }

  function treatError(error) {
    res.status(500)
    message = `ERROR: getFilms for "${query}" failed
${error}`
  }

  function proceed () {
    res.send(message )
  }
}


module.exports = findFilms
