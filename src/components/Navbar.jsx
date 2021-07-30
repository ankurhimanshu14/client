import React from 'react';
import clsx from 'clsx';
import * as path from 'path';
import { makeStyles, useTheme, Avatar, Grid, Drawer, AppBar, Toolbar, List, CssBaseline, Divider, IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import TrafficSharpIcon from '@material-ui/icons/TrafficSharp';
import PersonAddSharpIcon from '@material-ui/icons/PersonAddSharp';
import BarChartSharpIcon from '@material-ui/icons/BarChartSharp';
import TrendingUpSharp from '@material-ui/icons/TrendingUpSharp';
import Searchbox from './Searchbox';
import Infobox from './Infobox';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: "#5e72e4",
    paddingBottom: 300,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
            <Grid container direction="column">
                <Grid style={{marginTop: "10px"}} container spacing = {1}>
                    <Grid container xs={6} direction="row" justifyContent="flex-start" alignItems="flex-center">
                        <IconButton onClick={handleDrawerOpen}>
                            <MenuSharpIcon className={classes.menu} />
                        </IconButton>
                    </Grid>
                    <Grid container xs={6} direction="row" justifyContent="flex-end" alignItems="flex-center">
                        <Searchbox />
                        <IconButton>
                            <NotificationsSharpIcon className={classes.menu}/>
                        </IconButton>
                        <IconButton>
                            <Avatar alt="Remy Sharp" src={path.join(__dirname + "public/logo192.png")} className={classes.small} />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid  style={{marginTop: "50px"}} container direction="row" justifyContent="space-around" alignItems="center">
                    <Infobox className={classes.icon} name="TOTAL TRAFFIC" percent="2" icon={<TrafficSharpIcon style={{color: "#f5365c"}}/>} />
                    <Infobox name="NEW USERS" percent="-2" icon={<PersonAddSharpIcon style={{color: "#2dce89"}}/>} />
                    <Infobox name="SALES" percent="2" icon={<TrendingUpSharp style={{color: "#11cdef"}}/>} />
                    <Infobox name="PERFORMANCE" percent="-3" icon={<BarChartSharpIcon style={{color: "#fb6340"}}/>} />
                </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
      </main>
    </div>
  );
}

export default Navbar;
