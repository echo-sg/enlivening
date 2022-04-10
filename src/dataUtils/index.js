import { getAuth, signInWithPopup, TwitterAuthProvider } from 'firebase/auth';
import firebaseApp from '../firebase';
import { KEYS } from '../KEYS';
const axios = require('axios');

export const twitterSignIn = () => {
  const provider = new TwitterAuthProvider();
  const auth = getAuth(firebaseApp);
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = TwitterAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const secret = credential.secret;
      const user = result.user;
      console.log({
        user,
        token,
        secret,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = TwitterAuthProvider.credentialFromError(error);
      console.error({ errorCode, errorMessage, email, credential });
    });
};

export const getTweets = (twitterId) => {
  var config = {
    method: 'get',
    url: `https://api.twitter.com/2/users/${twitterId}/tweets?tweet.fields=created_at`,
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
