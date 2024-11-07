/* controllers/findFilms.js */

const { Film } = require('../database')
const ping = require("../ping.js")
const treatUrls = require('./helpers/treatUrls')


function sample(req, res) {
  ping(req, null, "SAMPLE")

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
