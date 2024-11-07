const ping = (req, res, title) => {
  title = typeof title === "string" ? title+": " : ""

  const protocol = req.protocol
  const host = req.headers.host
  const origin = req.get("origin") || req.socket.remoteAddress
  
  const message = `
${title}Connection
from ${origin}
to   ${protocol}://${host}
at   ${Date()}`

  console.log(message);

  if (res) {
    res.send(`<pre>${message}</pre>`)
  }
}

module.exports = ping