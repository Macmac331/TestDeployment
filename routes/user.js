const express = require('express')

const router = express.Router();

function user(req,res){
    res.send("Hello user")
}
router.get("/hello", user);

module.exports = router