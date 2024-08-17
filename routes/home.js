const express = require('express')

const router = express.Router()

function hello(req, res) {
    res.send("Hello");
}

router.get('/hello',hello);


module.exports = router;