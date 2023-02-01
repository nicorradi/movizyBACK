var express = require('express');
var router = express.Router();
require('dotenv').config();
const fetch = require('node-fetch');

const TMDB_API_KEY = process.env.TMDB_API_KEY

router.get('/', (req, res) => {
    res.render('index.html')
});

router.get("/movies", (req, res) => {
    console.log('route');
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}`)
    .then(response => response.json())
    .then(data => { 
        console.log(data);
        res.json({movies : data.results})
    })
});

module.exports = router;
