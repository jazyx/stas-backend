/**
 * app.js
 */

require('dotenv').config()
require('./database')
const express = require('express')
const cors = require('cors')

const ping = require('./ping')

const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.static('public'));
app.use(express.json()) // for POST data converted to JSON
app.use(express.urlencoded({ extended: true })) // for form data

require('./routes')(app)

// Route to test if the server is running
app.get('/ping', ping)


app.listen(PORT, logHostsToConsole)

function logHostsToConsole() {
  // Check what IP addresses are used by your development computer
  const nets = require("os").networkInterfaces()
  const ips = Object.values(nets)
  .flat()
  .filter(({ family }) => (
    family === "IPv4")
  )
  .map(({ address }) => address)

  // ips will include `127.0.0.1` which is the "loopback" address
  // for your computer. This address is not accessible from other
  // computers on your network. The host name  "localhost" can be
  // used as an alias for `127.0.0.1`, so you can add that, too.
  ips.unshift("localhost")

  // Log in the Terminal which URLs can connect to your server
  const hosts = ips.map( ip => (
    `http://${ip}:${PORT}`)
  )

  console.log(`Express server listening at:
  ${hosts.join("\n  ")}

Test with curl ${hosts.slice(-1)}/ping
or        curl ${hosts.slice(-2,-1)}/ping
`);
}
