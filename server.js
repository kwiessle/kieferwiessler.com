const http = require('http')
const express = require('express')
const app = express()
const mustache = require('mustache-express')

const PORT = 9999


app.engine('html', mustache())
app.set('view engine', 'html')
app.set('Views', __dirname + '/Views/')
app.use(express.static('public'))


//Controllers

const home = require('./Controllers/Home.js')
const zdkit = require('./Controllers/ZDKit.js')
app.get('/', home)
app.get('/zdkit', zdkit)



var SERVER = http.createServer(app, (req, res) => {
    res.writeHead(200)
}).listen(PORT)
