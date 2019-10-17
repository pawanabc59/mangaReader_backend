var express = require('express')
var app = express()
var bodyParser = require('body-parser')
    // routes
var user = require('./routes/user.js')
var manga = require('./routes/manga.js')
var books = require('./routes/book.js')

var PORT = process.env.PORT || 3306;

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))

app.use(express.static(__dirname + '/public'))
    // app.use('/profile', express.static(__dirname + '/public/profile'))

app.use('/user', user)
app.use('/manga', manga)
app.use('/books', books)

app.listen(5656)