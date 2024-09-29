const express = require('express');
const router = express.Router();
const getContents = require('./quotesDB');

router.get('/', function(req, res){
    res.render('index', {pageName: 'Home Page'});
})

router.get('/addPic', function(req, res){
    res.render('addPic', {pageName: " Add a Pic"});
})

router.get('/showQuotes', async (req, res) => {
    try {
        const quotes = await myModel.find(); // Fetching documents from MongoDB
        // Make sure quotes is an array before passing it to the template
        res.render('showQuotes', { arr: quotes });
    } catch (error) {
        console.error("Error fetching quotes:", error);
        res.status(500).send("Error retrieving quotes.");
    }
});

module.exports = router;