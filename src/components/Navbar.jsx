import React from 'react';
import * as path from 'path';
import { Grid, AppBar, Toolbar, IconButton, makeStyles, Drawer } from '@material-ui/core';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import Avatar from '@material-ui/core/Avatar';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import Searchbox from './Searchbox';

const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: "#5e72e4",
        position: "static",
        paddingBottom: 100
    },
    menu: {
        color: "#fff"
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3)
    }
}));
const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawer = () => {
        setOpen(!open);
    }

    return (
        <div>
        <AppBar className={classes.appbar} >
            <Toolbar>
                <Grid container spacing = {3}>
                    <Grid container xs={6} direction="row" justifyContent="flex-start" alignItems="flex-center">
                        <IconButton>
                            <MenuSharpIcon className={classes.menu} onClick={handleDrawer} />
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
            </Toolbar>
        </AppBar>
        <Drawer width="30" />
        </div>
    )
};

export default Navbar;