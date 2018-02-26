// import * as axios from 'axios'
let axios = require('axios')
let options = {}
// The server-side needs a full url to works
if (process.server) {
  options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
}

// export default
module.exports = axios.create(options)
