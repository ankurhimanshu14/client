import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from "@material-ui/core/Container";
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useLocation, Link } from "react-router-dom";
// @material-ui/core components
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons components

import NavbarDropdown from "../Dropdowns/NavbarDropdown.js";

import routes from '../../routes';

import componentStyles from "../../assets/theme/components/sidebar.js";

const useStyles = makeStyles(componentStyles);

export default function Sidebar() {
  const location = useLocation();
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
        color="transparent"
        backgroundColor="white"
        elevation={0}
        classes={{ root: classes.appBarRoot }}
        position="fixed"
        className={clsx(classes.appBarRoot, classes.appBar, {
          [classes.appBarShift]: open,
        })}
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
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
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
            { open ? (theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />) : null }
          </IconButton>
        </div>
        <Divider />
        <List classes={{ root: classes.listRoot }}>
            {routes.map((prop, key) => {
              let textContent = (
                <>
                  <Box minWidth="2.25rem" display="flex" alignItems="center">
                    {typeof prop.icon === "string" ? (
                      <Box
                        component="i"
                        className={prop.icon + " " + classes["text" + prop.iconColor]}
                      />
                    ) : null}
                    {typeof prop.icon === "object" ? (
                      <Box
                        component={prop.icon}
                        width="1.25rem!important"
                        height="1.25rem!important"
                        className={classes["text" + prop.iconColor]}
                      />
                    ) : null}
                  </Box>
                  {prop.name}
                </>
              );
              if (prop.href) {
                return (
                  <ListItem
                    key={key}
                    component={"a"}
                    href={prop.href}
                    onClick={handleDrawerClose}
                    classes={{
                      root: classes.listItemRoot,
                      selected: classes.listItemSelected,
                    }}
                  >
                    {textContent}
                  </ListItem>
                );
              } else {
                return (
                  <ListItem
                    key={key}
                    component={Link}
                    onClick={handleDrawerClose}
                    to={prop.layout + prop.path}
                    classes={{
                      root: classes.listItemRoot,
                      selected: classes.listItemSelected,
                    }}
                    selected={
                      location.pathname === prop.layout + prop.path ||
                      prop.upgradeToPro === true
                    }
                  >
                    {textContent}
                  </ListItem>
                );
              }
            })}
        </List>
      </Drawer>
      <main className={classes.content}>
      </main>
    </div>
  );
}