/* controllers/findFilms.js */

const { Film } = require('../database')
const treatUrls = require('./helpers/treatUrls')


function sample(req, res) {
  const { query = {}, size = 12 } = req.body

  let message

  Film.aggregate(query).sample(size)
    .then(treatSuccess)
    .catch(treatError)
    .finally(proceed)

  function treatSuccess(films) {
    treatUrls(films)
    message = JSON.stringify(films, null, "  ")
  }

  function treatError(error) {
    res.status(500)
    message = `ERROR: sample(${query}, ${size})" failed
${error}`
  }

  function proceed () {
    res.send(message )
  }
}


module.exports = sample
