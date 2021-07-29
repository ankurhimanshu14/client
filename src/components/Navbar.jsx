import React from 'react';
import * as path from 'path';
import { Grid, AppBar, Toolbar, IconButton, makeStyles, Drawer } from '@material-ui/core';
import { green, red, blue, orange } from '@material-ui/core/colors';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import TrafficSharpIcon from '@material-ui/icons/TrafficSharp';
import PersonAddSharpIcon from '@material-ui/icons/PersonAddSharp';
import BarChartSharpIcon from '@material-ui/icons/BarChartSharp';
import Avatar from '@material-ui/core/Avatar';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import Searchbox from './Searchbox';
import Infobox from './Infobox';
import TrendingUpSharp from '@material-ui/icons/TrendingUpSharp';

const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: "#5e72e4",
        position: "static",
        paddingBottom: 300
    },
    menu: {
        color: "#fff"
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3)
    },
    divider: {
        height: 28,
        margin: 4,
        backgroundColor: "black"
    },
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
        <Grid position="absolute" style={{marginTop: "-250px"}} container direction="row" justifyContent="space-around" alignItems="center">
            <Infobox name="TOTAL TRAFFIC" data="204, 506" percent="2" icon={<TrafficSharpIcon style={{color: red[500]}}/>} />
            <Infobox name="NEW USERS" data="204, 506" percent="2" icon={<PersonAddSharpIcon style={{color: green[500]}}/>} />
            <Infobox name="SALES" data="204, 506" percent="2" icon={<TrendingUpSharp style={{color: blue[500]}}/>} />
            <Infobox name="PERFORMANCE" data="204, 506" percent="2" icon={<BarChartSharpIcon style={{color: orange[500]}}/>} />
        </Grid>
        </div>
    )
};

export default Navbar;