import React, { useEffect, useState } from 'react';
import './Popup.css';
import Tweet from "./Tweet.jsx";
import Button from '@material-ui/core/Button';
import ComplexGrid from './Tweet.jsx';
import { getTweets, twitterSignIn } from '../../dataUtils';
import Grid from '@material-ui/core/Grid';

export default function Popup() {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    getTweets().then((res) => setTweets(res.data));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Sappy!
        </h1>
        <h3>
        Don't miss tweets from your favourite people
        </h3>
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
      <Button variant="contained" color="primary" style={{margin:"20px"}} align="right">
          Clear feed
        </Button>
    </Grid>
      <div className="Twitter-embed">
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </div>
  );
}
