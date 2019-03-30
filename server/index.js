require('dotenv').config()
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path');

const db = require('./models/index')

const handle = require('./handler/index')
const routes = require('./routes')

const app = express();
const port = process.env.PORT

app.use(cors())
app.use(bodyParser.json())

// app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {

  return res.json({hello: 'world'})
});

app.use('/api/auth', routes.auth)
app.use('/api/polls', routes.poll)

// app.use(handle.notFound);

app.use(handle.errors);

app.listen(port ,()=>{
    console.log(`Server is running on port ${port}`)
});