const express = require('express')

const router = express.Router();

function home(req,res){
    res.send("Hello")
}
function newHome(req, res){
    res.send("New Home")
}
router.get("/hello", home);
router.get("/home", newHome);

module.exports = router