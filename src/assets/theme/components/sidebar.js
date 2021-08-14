const drawerWidth = 250;

const componentStyles = (theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
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
      width: theme.spacing(7),
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
  listRoot: {
    marginTop: "2rem",
    height: "100%",
  },
  listItemRoot: {
    display: "flex",
    fontSize: ".9rem",
    color: theme.palette.sidebarLinks.main,
    padding: ".65rem 1.5rem !important",
    "&:hover": {
      color: theme.palette.sidebarLinks.dark,
    },
  },
  listItemRootUpgradeToPro: {
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      bottom: "10px",
    },
    "&,&:hover": {
      background: theme.palette.gray[100] + "!important",
    },
    "&:before": {
      display: "none",
    },
  },
  listItemSelected: {
    color: theme.palette.sidebarLinks.dark,
    "&$listItemRoot,&$listItemRoot:hover": {
      backgroundColor: "unset",
    },
    "&:before": {
      top: ".25rem",
      bottom: ".25rem",
      left: 0,
      right: "auto",
      borderLeft: "2px solid " + theme.palette.primary.main,
      borderBottom: 0,
      content: '""',
      position: "absolute",
    },
  },
  listItemIconRoot: {
    minWidth: "2.25rem",
    fontSize: ".9375rem",
    lineHeight: "1.5rem",
    display: "inline-block",
    top: "2px",
  },
  divider: {
    marginBottom: "1rem",
    marginTop: "1rem",
    marginLeft: "1.5rem",
    marginRight: "1.5rem",
  },
  title: {
    paddingTop: ".25rem",
    paddingBottom: ".25rem",
    fontSize: ".75rem",
    textTransform: "uppercase",
    letterSpacing: ".04em",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    color: theme.palette.gray[600],
  },
  logoClasses: {
    maxHeight: "2rem",
    maxWidth: "100%",
    verticalAlign: "middle",
    borderStyle: "none",
    [theme.breakpoints.up("md")]: {
      maxHeight: "2.5rem",
    },
  },
  logoLinkClasses: {
    fontSize: "1.25rem",
    lineHeight: "inherit",
    whiteSpace: "nowrap",
    textDecoration: "none",
    display: "block",
    textAlign: "center",
  },
  textPrimary: {
    color: theme.palette.primary.main,
  },
  textPrimaryLight: {
    color: theme.palette.primary.light,
  },
  textError: {
    color: theme.palette.error.main,
  },
  textErrorLight: {
    color: theme.palette.error.light,
  },
  textWarning: {
    color: theme.palette.warning.main,
  },
  textWarningLight: {
    color: theme.palette.warning.light,
  },
  textInfo: {
    color: theme.palette.info.main,
  },
  textInfoLight: {
    color: theme.palette.info.light,
  },
  menuPaper: {
    width: "calc(100% - 2rem)",
  },
  outlineNone: {
    outline: "none!important",
  },
});

export default componentStyles;
