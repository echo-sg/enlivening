import React, { useEffect, useState } from 'react';
import './Popup.css';
import Tweet from './Tweet.jsx';
import Button from '@material-ui/core/Button';
import { getTweets } from '../../dataUtils';
import Grid from '@material-ui/core/Grid';
import { clearFeed, getAllUsers, saveRecords } from '../../storageUtils';

export default function Popup() {
  const [tweetsList, setTweetsList] = useState([]);

  useEffect(() => {
    getAllUsers().then((usersList) => {
      usersList.forEach((user) => {
        getTweets(user.id).then((tweets) => {
          saveRecords([user], tweets.data);
          const tweetsCopy = [];
          tweets.data.forEach((tweet) => {
            tweetsCopy.push({
              ...tweet,
              userId: user.id,
              username: user.username,
              name: user.name,
              profile_image_url: user.profile_image_url,
              show: true,
            });
          });
          tweetsCopy.length = 2;
          setTweetsList((prev) => [...prev, ...tweetsCopy]);
        });
      });
    });
  }, []);

  const doClearFeed = () => {
    setTweetsList([]);
    clearFeed();
  };

  const changeTweetVisiblity = (tweetId) => {
    setTweetsList((prev) => {
      const prevCopy = [...prev];
      const index = prevCopy.findIndex((prevData) => prevData.id === tweetId);
      if (index !== -1) {
        const tweet = prevCopy[index];
        tweet.show = false;
      }
      return prevCopy;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sappy!</h1>
        <h3>Don't miss tweets from your favourite people</h3>
        <a
          className="App-link"
          href="/options.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Change your preferences here!
        </a>
      </header>
      <Grid container justify="flex-end">
        <Button
          variant="contained"
          color="primary"
          style={{ margin: '20px' }}
          align="right"
          onClick={doClearFeed}
        >
          Clear feed
        </Button>
      </Grid>
      <div className="Twitter-embed">
        {tweetsList.map((tweet, i) => {
          return (
            <Tweet
              name={tweet.name}
              username={tweet.username}
              tweet={tweet.text}
              profileImage={tweet.profile_image_url}
              tweetId={tweet.id}
              showTweet={tweet.show}
              changeTweetVisiblity={changeTweetVisiblity}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}
