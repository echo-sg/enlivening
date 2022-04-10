import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@mui/material/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 6,
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

export default function Tweet({ name, username, tweet, profileImage }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} justify="flex-start">
          <Grid item style={{ paddingTop: '15px' }}>
            <Avatar src={profileImage}>RJ</Avatar>
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
      <Grid container justify="flex-end">
        <div style={{ paddingTop: '15px' }}>Mark as read </div>
        <Checkbox
          // {...label}
          sx={{
            color: 'green',
            '&.Mui-checked': {
              color: 'green',
            },
          }}
        />
      </Grid>
    </div>
  );
}
