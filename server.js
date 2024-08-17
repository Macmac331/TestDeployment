const express = require('express')
const home = require('./routes/home');

const app = express();
app.use(express.json())

app.use("/api/home", home)

const port = 5000;
app.listen(port, () => console.log(`Listening to port ${port}`))