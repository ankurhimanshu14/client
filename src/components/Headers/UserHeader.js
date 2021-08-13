import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from '@material-ui/core/Container';

// core components
import componentStyles from "../../assets/theme/components/user-header.js";

const useStyles = makeStyles(componentStyles);

const UserHeader = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.header}>
      <Container
        maxWidth={false}
        component={Box}
        classes={{ root: classes.containerRoot }}
      ></Container>
        <div>
      <Box
        paddingTop="3rem"
        paddingBottom="1rem"
        alignItems="center"
        display="flex"
        className={classes.overlayBox}
        minHeight="500px"
        position="relative"
      />
      </div>
      </div>
    </>
  );
};

export default UserHeader;
