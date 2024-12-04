// This will allow us to use process.env.MONGO_URI in our scripts
require('dotenv').config({ path: './.env' })


let PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI

module.exports = {
  MONGODB_URI,
  PORT
}