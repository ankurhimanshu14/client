import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green, red, blue, orange } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import useStyles from '../assets/styleComponents';

const Infobox = (props) => {
  const classes = useStyles();

  const [data, setData] = React.useState({
    value: 0
});

React.useEffect(() => {
    let val = 2045;

    setData({
        value: val
    });
}, [data])

  return (
    <div className={classes.infoboxRoot}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {data.value}
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