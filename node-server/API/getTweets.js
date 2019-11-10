const axios = require('axios');

// pass in params for token & q

const getTweets = async (token, tweetQuery) => {
  return await axios.get('https://api.twitter.com/1.1/search/tweets.json?', {
    params: {
      q: tweetQuery,
      "result_type": 'popular',
      count: "5"
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    }
  })
}

module.exports = getTweets;


// searchTweet = (query) =>  {
//   q: query,
//   count: 10,
//   lang: 'en',
// }