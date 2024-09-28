const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.render('index', {pageName: 'Home Page'});
})

router.get('/addPic', function(req, res){
    res.render('addPic', {pageName: " Add a Pic"});
})

module.exports = router;