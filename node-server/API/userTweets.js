const axios = require('axios');

// pass in params for token & q

const userTweets = async (token, tweetQuery) => {
  return await axios.get('https://api.twitter.com/1.1/statuses/user_timeline.json?', {
    params: {
      screen_name: tweetQuery,
      count: "4"
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    }
  })
    .then(result => {
      // console.log(result.data);
      return result;
    })
    .catch(err => console.log(err));
}

module.exports = userTweets;