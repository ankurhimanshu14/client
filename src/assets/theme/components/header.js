
const componentStyles = (theme) => ({
  header: {
    position: "relative",
    background:
      "linear-gradient(87deg," + theme.palette.info.main + ",#1171ef)",
    paddingBottom: "8rem",
    paddingTop: "100rem",
    [theme.breakpoints.up("md")]: {
      paddingTop: "8rem",
      marginTop: '-3rem'
    },
  },
  containerRoot: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "39px",
      paddingRight: "39px",
    },
  },
});

export default componentStyles;
