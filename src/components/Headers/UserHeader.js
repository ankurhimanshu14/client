import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

// core components
import componentStyles from "../../assets/theme/components/user-header.js";

const useStyles = makeStyles(componentStyles);

const UserHeader = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Box
        paddingTop="3rem"
        paddingBottom="1rem"
        alignItems="center"
        display="flex"
        className={classes.wrapperBox}
        minHeight="100px"
        position="relative"
      />
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          className={classes.overlayBox}
        />
        {/* <Container
          display="flex"
          alignItems="center"
          maxWidth={false}
          component={Box}
          classes={{ root: classes.containerRoot }}
        >
          <Grid container>
            <Grid item xs={12} md={10} lg={7}>
            </Grid>
          </Grid>
        </Container> */}
      {/* </Box> */}
    </>
  );
};

export default UserHeader;
