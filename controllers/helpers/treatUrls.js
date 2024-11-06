/**
 * controllers/helpers/treatUrls.js
 */

const { ROOT, THUMB, SRT } = process.env

const treatUrls = films => {
  films.forEach(film => {
    film.thumbnail = `${ROOT}${THUMB}${film.thumbnail}`

    film.languages.forEach(language => {
      language.file = `${ROOT}${SRT}${language.file}`
    })
  })
}


module.exports = treatUrls