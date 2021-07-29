import React from 'react';
import { Paper, InputBase, Divider, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    marginRight: 50,
    width: 300,
    borderRadius: 100,
    color: "white",
    border: "white 2px solid",
    backgroundColor: "#5e72e4"
  },
  input: {
    marginLeft: theme.spacing(1),
    color: "white !important"
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
    backgroundColor: "white"
  },
}));

const Searchbox = () => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
        <SearchIcon className={classes.input}/>
        <Divider className={classes.divider} orientation="vertical" />
      <InputBase
        className={classes.input}
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search' }}
        focused
      />
    </Paper>
  );
}

export default Searchbox;