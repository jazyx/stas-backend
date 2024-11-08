/**
 * database/seed.js
 */


const { readFile } = require('fs/promises')
const { join } = require('path')

const SEED = join(__dirname, 'seed.json')


async function seed(Film) {
  const count = await Film.estimatedDocumentCount()

  if (count) {
    return console.log(`There are ${count} films in the database`)
  }

  const text = await readFile(SEED, 'utf-8')
  const films = JSON.parse(text)

  const promises = []

  films.forEach( filmData => {
    const title = filmData
    // {
    //   title,
    //   videoId,
    //   thumbnail,
    //   year,
    //   vo,
    //   width,
    //   height,
    //   languages
    // }

    promises.push(new Promise(addFilm))

    function addFilm(resolve, reject) {
      new Film(filmData)
        .save()
        .then(treatSuccess)
        .catch(treatError)

      function treatSuccess(film) {
        const { title } = film
        resolve({ title, saved: true })
      }

      function treatError(error) {
        reject({ title, saved: false, error })
    }}
  })

  Promise
    .allSettled(promises)
    .then(proceed)

  function proceed (result) {
    const saved = result
      .filter( film => (
        film.status === "fulfilled"
      ))
      .map( film => film.value.title )

    const failed = result
      .filter( film => (
        film.status === "rejected"
      ))
      .map(film => {
        const title = film.reason.title
        const reason = film.reason.error.message

        return { title, reason }
      })

    const message = {}
    if (saved.length) {
      message.saved = saved
    } else {
      message.saved =0
    }

    if (failed.length) {
      message.failed = failed
    } else {
      message.failed = 0
    }

    console.log("message:", JSON.stringify(message, null, "  ")); 
  }
}


module.exports = seed
