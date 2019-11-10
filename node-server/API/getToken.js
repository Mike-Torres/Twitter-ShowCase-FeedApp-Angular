const axios = require('axios');
const express = require('express');
const app = express();
const KEY = process.env.TWITTER_API_KEY;
const SECRET = process.env.TWITTER_API_SECRET_KEY;

const getToken = async () => {

    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      auth: {
        username: KEY,
        password: SECRET,
      }
    };

    const data = "grant_type=client_credentials";

    // axios.post('https://api.twitter.com/oauth2/token', data, config)
    //   .then(response => {
    //     console.log(response.data.access_token);
    //     return response.data.access_token;
    //   })
    //   .catch(function (error) {
    //     // console.log(error.response.data);
    //     // console.log(error.response.status);
    //     // console.log(error.response.headers);
    //     res.sendStatus(500);
    //   })
      return axios.post('https://api.twitter.com/oauth2/token', data, config);
      // promise object
  }

module.exports = getToken;

