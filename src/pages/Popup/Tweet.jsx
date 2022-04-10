import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

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

export default function ComplexGrid({ username, name, tweet }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item style={{ paddingTop: '15px' }}>
            <Avatar>RJ</Avatar>
          </Grid>
          <Grid item>
            <Typography gutterBottom p={0} variant="subtitle1">
              {name}
            </Typography>
            <Typography variant="body2" p={0} color="textSecondary">
              @{username}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs={12}>
                <Grid item>
                  <Typography variant="subtitle1" align="left">
                    {tweet}
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
