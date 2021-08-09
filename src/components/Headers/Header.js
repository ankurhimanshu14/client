import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// @material-ui/icons components
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import GroupAdd from "@material-ui/icons/GroupAdd";
import PaymentSharpIcon from '@material-ui/icons/PaymentSharp';
import TouchAppSharpIcon from '@material-ui/icons/TouchAppSharp';
import TrendingUpSharpIcon from '@material-ui/icons/TrendingUpSharp';
import ReceiptSharpIcon from '@material-ui/icons/ReceiptSharp';
import AttachMoneySharpIcon from '@material-ui/icons/AttachMoneySharp';
// core components
import CardStats from "../Cards/CardStats.js";

import componentStyles from "../../assets/theme/components/header.js";

const useStyles = makeStyles(componentStyles);

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [val, setVal] = React.useState({
    payment: 0,
    totalclicks: 0,
    totalconversion: 0,
    totalcr: "0",
    totalpayout: 0,
    totalrevenue: 0
  });

  const fetchData = () => {
    const requestOptions = {
      credentials: 'include'
    };

    return fetch('https://mcashapi.xyz/api/v1/analytics', requestOptions)
    .then(res => res.json())
    .then(data => setVal({
      payment: data.data.payment,
      totalclicks: data.data.totalclicks,
      totalconversion: data.data.totalconversion,
      totalcr: data.data.totalcr,
      totalpayout: data.data.totalpayout,
      totalrevenue: data.data.totalrevenue
    }));
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className={classes.header}>
        <Container
          maxWidth={false}
          component={Box}
          classes={{ root: classes.containerRoot }}
        >
          <div>
            <Grid container>
              <Grid item xl={4} lg={6} xs={12}>
                <CardStats
                  subtitle="Payment"
                  title={val.payment.toLocaleString()}
                  icon={PaymentSharpIcon}
                  color="bgError"
                  footer={
                    <>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        color={theme.palette.success.main}
                        marginRight=".5rem"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          component={ArrowUpward}
                          width="1.5rem!important"
                          height="1.5rem!important"
                        />{" "}
                        3.48%
                      </Box>
                      <Box component="span" whiteSpace="nowrap">
                        Since last month
                      </Box>
                    </>
                  }
                />
              </Grid>
              <Grid item xl={4} lg={6} xs={12}>
                <CardStats
                  subtitle="Clicks"
                  title={val.totalclicks.toLocaleString()}
                  icon={TouchAppSharpIcon}
                  color="bgWarning"
                  footer={
                    <>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        color={theme.palette.error.main}
                        marginRight=".5rem"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          component={ArrowDownward}
                          width="1.5rem!important"
                          height="1.5rem!important"
                        />{" "}
                        3.48%
                      </Box>
                      <Box component="span" whiteSpace="nowrap">
                        Since last week
                      </Box>
                    </>
                  }
                />
              </Grid>
              <Grid item xl={4} lg={6} xs={12}>
                <CardStats
                  subtitle="Conversion"
                  title={val.totalconversion.toLocaleString()}
                  icon={TrendingUpSharpIcon}
                  color="bgWarningLight"
                  footer={
                    <>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        color={theme.palette.warning.main}
                        marginRight=".5rem"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          component={ArrowDownward}
                          width="1.5rem!important"
                          height="1.5rem!important"
                        />{" "}
                        1.10%
                      </Box>
                      <Box component="span" whiteSpace="nowrap">
                        Since yesterday
                      </Box>
                    </>
                  }
                />
              </Grid>
              <Grid item xl={4} lg={6} xs={12}>
                <CardStats
                  subtitle="Cr"
                  title={val.totalcr.toLocaleString()}
                  icon={ReceiptSharpIcon}
                  color="bgPrimaryLight"
                  footer={
                    <>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        color={theme.palette.warning.main}
                        marginRight=".5rem"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          component={ArrowDownward}
                          width="1.5rem!important"
                          height="1.5rem!important"
                        />{" "}
                        1.10%
                      </Box>
                      <Box component="span" whiteSpace="nowrap">
                        Since yesterday
                      </Box>
                    </>
                  }
                />
              </Grid>
              <Grid item xl={4} lg={6} xs={12}>
                <CardStats
                  subtitle="Payout"
                  title={val.totalpayout.toLocaleString()}
                  icon={GroupAdd}
                  color="bgInfo"
                  footer={
                    <>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        color={theme.palette.warning.main}
                        marginRight=".5rem"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          component={ArrowDownward}
                          width="1.5rem!important"
                          height="1.5rem!important"
                        />{" "}
                        1.10%
                      </Box>
                      <Box component="span" whiteSpace="nowrap">
                        Since yesterday
                      </Box>
                    </>
                  }
                />
              </Grid>
              <Grid item xl={4} lg={6} xs={12}>
                <CardStats
                  subtitle="Revenue"
                  title={val.totalrevenue.toLocaleString()}
                  icon={AttachMoneySharpIcon}
                  color="bgPrimary"
                  footer={
                    <>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        color={theme.palette.success.main}
                        marginRight=".5rem"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          component={ArrowUpward}
                          width="1.5rem!important"
                          height="1.5rem!important"
                        />{" "}
                        10%
                      </Box>
                      <Box component="span" whiteSpace="nowrap">
                        Since last month
                      </Box>
                    </>
                  }
                />
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
