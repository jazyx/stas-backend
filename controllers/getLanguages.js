/* controllers/getSRT.js */

const { Film } = require('../database')


function getLanguages(req, res) {
  let message

  const $match = {}
  Film.aggregate(
      [{ $match }],
    )
    .then(treatSuccess)
    .catch(treatError)
    .finally(proceed)

  async function treatSuccess(results) {
    console.log("results:", results);
    // {
    //   _id: new ObjectId('672a6e7ed04deb2a63a2a4bd'),
    //   languages: [ { lang: 'enUS' }, ... ]
    // } 
    
    message = JSON.stringify(results, null, "  ")
  }

  function treatError(error) {
    res.status(500)
    message = `ERROR: getLanguages failed
${error}`
  }

  function proceed() {
    res.send(message )
  }
}


module.exports = getLanguages
