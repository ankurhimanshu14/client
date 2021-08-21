import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from "@material-ui/core/Container";
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useLocation, Link } from "react-router-dom";
// @material-ui/core components
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons components

import routes from '../../routes';

import componentStyles from "../../assets/theme/components/sidebar.js";
import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';
import ArrowDownwardSharpIcon from '@material-ui/icons/ArrowDownwardSharp';

const useStyles = makeStyles(componentStyles);

export default function Sidebar() {
  const location = useLocation();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClick = item => {
    setOpen( prevState => ( 
      { [ item ]: !prevState[ item ] } 
    ) )
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="transparent"
        backgroundColor="white"
        elevation={0}
        classes={{ root: classes.appBarRoot }}
        position="fixed"
        className={classes.appBarRoot}
      >
        <Toolbar disableGutters>
          <Container
            maxWidth={false}
            component={Box}
            classes={{ root: classes.containerRoot }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              marginTop="0.5rem"
            >
              <div>
              <IconButton
                color="inherit"
                backgroundColor="primary"
                aria-label="open drawer"
                edge="start"
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              </div>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={classes.drawer}
      >
        <List classes={{ root: classes.listRoot }}>
            {routes.map((prop, key) => {
              let textContent = (
                <>
                  <ListItem
                    key={key}
                    component={Link}
                    to={prop.layout + prop.path}
                    classes={{
                      root: classes.listItemRoot,
                    }}
                    style={{backgroundColor: 'unset'}}
                    selected={location.pathname === prop.layout + prop.path}
                    onClick = {() => handleClick(prop.id)}
                  >
                  <Box minWidth="2.25rem" display="flex" alignItems="center">
                      <Box
                        component={prop.icon}
                        width="1.25rem!important"
                        height="1.25rem!important"
                        className={classes["text" + prop.iconColor]}
                      />
                  </Box>
                    {prop.name}
                    <Grid style={{marginLeft: "-1rem"}} container xs={12} direction="row" justifyContent="flex-end" alignItems="center">
                    { (prop.item.length > 0) ? (open[prop.id] ? <ArrowDownwardSharpIcon className={classes.icon} /> : <ArrowForwardSharpIcon className={classes.icon} />) : null}
                    </Grid>
                  </ListItem>
                </>
              );
                return (
                  <>
                  <List>
                  <ListItem
                    key={prop.id}
                    component={Link}
                    size="small"
                    to={prop.layout + prop.path}
                    classes={{
                      root: classes.listItemRoot,
                      selected: classes.listItemSelected,
                    }}
                    selected={location.pathname === prop.layout + prop.path}
                  >
                    {textContent}
                  </ListItem>
                    <Collapse in={open[prop.id]} timeout="auto" unmountOnExit>
                    {prop.item.map((p, k) => (
                      <ListItem
                      key={p.id}
                      component={Link}
                      to={p.layout + p.path}
                      classes={{
                        root: classes.sublistItemRoot,
                        selected: classes.listItemSelected,
                      }}
                      selected={location.pathname === p.layout + p.path}>
                      <Box
                        component={p.icon}
                        width="1.25rem!important"
                        height="1.25rem!important"
                        className={classes["text" + p.iconColor]}
                      />
                        {p.name}
                      </ListItem>
                    ))}
                    </Collapse>
                    </List>
                  </>
                );
              }
            )}
        </List>
      </Drawer>
      <main className={classes.content}>
      </main>
    </div>
  );
}