import { KEYS } from '../KEYS';
const axios = require('axios');

export const getTweets = (twitterId) => {
  var config = {
    method: 'get',
    url: `https://api.twitter.com/2/users/${twitterId}/tweets?tweet.fields=created_at&max_results=5`,
    headers: {
      Authorization: 'Bearer ' + KEYS.BEARER_TOKEN,
    },
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
};

export const getTwitterUserByUserName = (username) => {
  var config = {
    method: 'get',
    url:
      'https://api.twitter.com/2/users/by/username/' +
      username +
      '?user.fields=profile_image_url',
    headers: {
      Authorization: 'Bearer ' + KEYS.BEARER_TOKEN,
    },
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
};
