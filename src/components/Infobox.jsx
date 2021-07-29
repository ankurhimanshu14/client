import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green, red, blue, orange } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 250,
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

const Infobox = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.data}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {
                  (props.percent > 0) ?
                  <ArrowUpward style={{color: green[500]}}/>
                  :
                  <ArrowDownward style={{color: red[500]}}/>
                  } 
                  {props.percent}% Since last month
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              {props.icon}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Infobox;