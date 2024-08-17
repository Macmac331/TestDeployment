const express = require('express')
const homeRoute = require('../routes/home')

const app = express();
app.use(express.json())

app.use('/home', homeRoute)

app.listen(5000, () => console.log(`Listening to port 5000`))

module.exports = app;