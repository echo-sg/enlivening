import { getAuth, signInWithPopup, TwitterAuthProvider } from 'firebase/auth';
import firebaseApp from '../firebase';
import { KEYS } from '../KEYS';
const axios = require('axios');

export const twitterSignIn = () => {
  const provider = new TwitterAuthProvider();
  const auth = getAuth(firebaseApp);
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
      // You can use these server side with your app's credentials to access the Twitter API.
      const credential = TwitterAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const secret = credential.secret;

      // The signed-in user info.
      const user = result.user;
      console.log({
        user,
        token,
        secret,
      });
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = TwitterAuthProvider.credentialFromError(error);
      // ...
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
