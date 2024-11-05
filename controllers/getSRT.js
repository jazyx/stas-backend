/* controllers/getSRT.js */

const { readFile } = require("fs/promises")
const { join } = require("path")
const { Film } = require('../database')

const SRT_PATH = "public/srt/"


function getSRT(req, res) {
  // Allow request from either a query string or a body object
  const { videoId, lang } = (
    req.query.videoId ? req.query : req.body
  )

  let message

  Film.findOne(
      { videoId, "languages.lang": lang },
      { "languages.file": 1, title: 1 }
    )
    .then(treatSuccess)
    .catch(treatError)
    .finally(proceed)

  async function treatSuccess(results) {
    console.log("results:", results);
    // {
    //   _id: new ObjectId('672a6e7ed04deb2a63a2a4bd'),
    //   title: 'Temple Grandin',
    //   languages: [ { file: 'TempleGrandinENUS.srt' } ]
    // } 
    
    if (!results) {
      // results may be null if videoId does not match any, or if
      // there is no `lang` file for that videoId
      message = `No ${lang} SRT file found for "${videoId}"`

    } else {
      const { title, languages } = results

      if (languages && languages.length) {
        const file = join(SRT_PATH, languages[0].file)
        message = await readFile(file, "utf-8")

      } else {
        // languages is missing or empty
        message = `No ${lang} SRT file found for "${title}"`
      }
    }
  }

  function treatError(error) {
    res.status(500)
    message = `ERROR: getSRT for "${videoId}" failed
${error}`
  }

  function proceed() {
    res.send(message )
  }
}


module.exports = getSRT