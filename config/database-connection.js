var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'remotemysql.com',
  user: 'ZfvrVvpz4B',
  password: 'HnZ9TeXnQw',
  database: 'ZfvrVvpz4B'
})

connection.connect(function (err) {
  if (err) {
    throw err
  }
})

module.exports = connection
