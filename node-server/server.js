const express = require('express'); // importing express library 
const app = express(); //call express variable
const axios = require('axios')
const path = require('path');
const port = 3000;
require('dotenv').config();
const getToken = require('./API/getToken');
const getTweets = require('./API/getTweets');
const getUserTweets = require('./API/userTweets')
const TWITTER_TWEET_SEARCH_URL = 'https://api.twitter.com/1.1/search/tweets.json';


let token;
// let tweets; dsa
// let userTweets;

const authToken = getToken();

app.use('/', express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/index.html'));
});

//console.log(“getToken.js: “, response.data.access_token);

app.get('/api/tweets', function (req, res) {
    authToken
        .then(result => {
            token = result.data.access_token; //token
            // console.log(authToken)
            axios.get(TWITTER_TWEET_SEARCH_URL, {
                    headers: {
                        "Authorization": `Bearer ${token}` 
                    },
                    params: { 
                        q: req.query.searchTerm,
                    }
                })
                .then(response => {
                    res.send(response.data)
                })
                .catch(error => {
                    res.sendStatus(500);
                })
        });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));