import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    infoboxRoot: {
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
    linechartCanvas: {
        width: "60%",
        height: "auto",
        border: "1px solid black",
        borderRadius: "5px",
        backgroundColor: "#172b4d",
        marginTop: "3%",
        marginLeft: "5%"
    },
    barchartCanvas: {
        width: "30%",
        height: "auto",
        border: "1px solid black",
        borderRadius: "5px",
        backgroundColor: "#172b4d",
        marginTop: "3%",
        marginLeft: "5%"
    }
}));

export default useStyles;

