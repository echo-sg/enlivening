import React, { useEffect, useState } from 'react';
import './Popup.css';
import Button from '@material-ui/core/Button';
import ComplexGrid from './Tweet.jsx';
import { getTweets, twitterSignIn } from '../../dataUtils';

export default function Popup() {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    getTweets().then((res) => setTweets(res.data));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Enlivening</h1>
        <h3>Don't miss tweets from your favourite content creators</h3>
        <a
          className="App-link"
          href="/options.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Change your preferences here!
        </a>
        <Button
          onClick={twitterSignIn}
          variant="contained"
          color="primary"
          style={{ margin: '20px' }}
        >
          Sign in with Twitter!
        </Button>
      </header>
      <div className="Twitter-embed">
        {/* {tweets.map(tweet=>{
          return <ComplexGrid name={} />
        })} */}
        <ComplexGrid name={"nafees"} username="nafees87n" tweet={"fbsjfbdj"} />
      </div>
    </div>
  );
}
