import React from 'react';
import './Popup.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar>SG</Avatar>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="subtitle1">
              React
            </Typography>
            <Typography variant="body2" color="textSecondary">
              @reactjs
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs={12} sm={9}>
                <Grid item>
                  <Typography gutterBottom variant="subtitle1">
                    The changes in the React 18 typings go a long way towards
                    catching issues that were previously silently ignored and
                    caused crashes.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default function Popup() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="/options.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to checkout the Options Page!
        </a>
        <Button variant="contained" color="primary">
          Sign in with Twitter!
        </Button>
      </header>
      <div className="Twitter-embed">
        <ComplexGrid />
      </div>
    </div>
  );
}
