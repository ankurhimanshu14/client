import componentStyles from "../../assets/theme/views/admin/dashboard.js";
import React from "react";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons components
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";

// core components
import Header from "../../components/Headers/Header.js";

const themeColors = require("../../assets/theme/colors.js").default;

const format = (val) => {
  return (val > 9) ? val : `0${val}`;
}

var colors = {
  gray: themeColors.gray,
  theme: {
    default: themeColors.dark.main,
    primary: themeColors.primary.main,
    secondary: "#f4f5f7",
    info: themeColors.info.main,
    success: themeColors.success.main,
    danger: themeColors.error.main,
    warning: themeColors.warning.main,
  },
  black: themeColors.black.light,
  white: themeColors.white.main,
  transparent: themeColors.transparent.main,
};

const useStyles = makeStyles(componentStyles);

function Dashboard() {
  const today = new Date();
  const classes = useStyles();
  const theme = useTheme();
  const [activeNav, setActiveNav] = React.useState(1);
  const [chartExample1Data, setChartExample1Data] = React.useState("data1");
  const [startDate, setStartDate] = React.useState(`${today.getFullYear()}-${format(today.getMonth() + 1)}-01`);
  const [endDate, setEndDate] = React.useState(`${today.getFullYear()}-${format(today.getMonth() + 1)}-${format(today.getDate())}`);

  const handleSubmit = async () => {
    const requestOptions = {
      credentials: 'include'
  };

  const response = await fetch('', requestOptions)
  const data = await response.json();
  setChartExample1Data(data);
  }

  return (
    <>
      <Header />
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        marginTop="-6rem"
        classes={{ root: classes.containerRoot }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            xl={8}
            component={Box}
            marginBottom="3rem!important"
            classes={{ root: classes.gridItemRoot }}
          >
            <Card
              classes={{
                root: classes.cardRoot + " " + classes.cardRootBgGradient,
              }}
            >
              <CardHeader
                subheader={
                  <Grid
                    container
                    component={Box}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item xs="auto">
                      <Box
                        component={Typography}
                        variant="h6"
                        letterSpacing=".0625rem"
                        marginBottom=".25rem!important"
                        className={classes.textUppercase}
                      >
                        <Box component="span" color={theme.palette.gray[400]}>
                          Overview
                        </Box>
                      </Box>
                      <Box
                        component={Typography}
                        variant="h2"
                        marginBottom="0!important"
                      >
                        <Box component="span" color={theme.palette.white.main}>
                          Sales value
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs="auto">
                      <Box
                        justifyContent="flex-end"
                        display="flex"
                        flexWrap="wrap"
                      >
                      <TextField
                      id="startDate"
                      name="startDate"
                      type="date"
                      variant="outlined"
                      value={startDate}
                      onChange={e => setStartDate(e.target.value)}
                      marginRight="1rem!important"
                      />
                      <TextField
                      id="endDate"
                      name="endDate"
                      type="date"
                      variant="outlined"
                      marginRight="1rem!important"
                      value={endDate}
                      onChange={e => setEndDate(e.target.value)}
                      />
                        <Button
                          variant="contained"
                          color="primary"
                          component={Box}
                          marginRight="1rem!important"
                          onClick={() => handleSubmit() }
                          classes={{
                            root:
                              activeNav === 1
                                ? ""
                                : classes.buttonRootUnselected,
                          }}
                        >
                          Submit
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                }
                classes={{ root: classes.cardHeaderRoot }}
              ></CardHeader>
              <CardContent>
                <Box position="relative" height="350px">
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} xl={4}>
            <Card classes={{ root: classes.cardRoot }}>
              <CardHeader
                title={
                  <Box component="span" color={theme.palette.gray[600]}>
                    Performance
                  </Box>
                }
                subheader="Total orders"
                classes={{ root: classes.cardHeaderRoot }}
                titleTypographyProps={{
                  component: Box,
                  variant: "h6",
                  letterSpacing: ".0625rem",
                  marginBottom: ".25rem!important",
                  classes: {
                    root: classes.textUppercase,
                  },
                }}
                subheaderTypographyProps={{
                  component: Box,
                  variant: "h2",
                  marginBottom: "0!important",
                  color: "initial",
                }}
              ></CardHeader>
              <CardContent>
                <Box position="relative" height="350px">
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container component={Box} marginTop="3rem">
          <Grid
            item
            xs={12}
            xl={8}
            component={Box}
            marginBottom="3rem!important"
            classes={{ root: classes.gridItemRoot }}
          >
            <Card
              classes={{
                root: classes.cardRoot,
              }}
            >
              <CardHeader
                subheader={
                  <Grid
                    container
                    component={Box}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item xs="auto">
                      <Box
                        component={Typography}
                        variant="h3"
                        marginBottom="0!important"
                      >
                        Page visits
                      </Box>
                    </Grid>
                    <Grid item xs="auto">
                      <Box
                        justifyContent="flex-end"
                        display="flex"
                        flexWrap="wrap"
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                        >
                          See all
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                }
                classes={{ root: classes.cardHeaderRoot }}
              ></CardHeader>
              <TableContainer>
                <Box
                  component={Table}
                  alignItems="center"
                  marginBottom="0!important"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Page name
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Visitors
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Unique users
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Bounce rate
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        /argon/
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        4,569
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        340
                      </TableCell>
                      <Box
                        component={TableCell}
                        className={classes.tableCellRoot}
                        marginBottom="-2px"
                      >
                        <Box
                          component={ArrowUpward}
                          width="1rem!important"
                          height="1rem!important"
                          marginRight="1rem"
                          color={theme.palette.success.main}
                        />
                        46,53%
                      </Box>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        /argon/index.html
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        3,985
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        319
                      </TableCell>
                      <Box
                        component={TableCell}
                        className={classes.tableCellRoot}
                        marginBottom="-2px"
                      >
                        <Box
                          component={ArrowDownward}
                          width="1rem!important"
                          height="1rem!important"
                          marginRight="1rem"
                          color={theme.palette.warning.main}
                        />
                        46,53%
                      </Box>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        /argon/charts.html
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        3,513
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        294
                      </TableCell>
                      <Box
                        component={TableCell}
                        className={classes.tableCellRoot}
                        marginBottom="-2px"
                      >
                        <Box
                          component={ArrowDownward}
                          width="1rem!important"
                          height="1rem!important"
                          marginRight="1rem"
                          color={theme.palette.warning.main}
                        />
                        36,49%
                      </Box>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        /argon/tables.html
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        2,050
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        147
                      </TableCell>
                      <Box
                        component={TableCell}
                        className={classes.tableCellRoot}
                        marginBottom="-2px"
                      >
                        <Box
                          component={ArrowUpward}
                          width="1rem!important"
                          height="1rem!important"
                          marginRight="1rem"
                          color={theme.palette.success.main}
                        />
                        50,87%
                      </Box>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead +
                            " " +
                            classes.borderBottomUnset,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        /argon/profile.html
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.borderBottomUnset,
                        }}
                      >
                        1,795
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.borderBottomUnset,
                        }}
                      >
                        190
                      </TableCell>
                      <Box
                        component={TableCell}
                        className={
                          classes.tableCellRoot +
                          " " +
                          classes.borderBottomUnset
                        }
                        marginBottom="-2px"
                      >
                        <Box
                          component={ArrowDownward}
                          width="1rem!important"
                          height="1rem!important"
                          marginRight="1rem"
                          color={theme.palette.error.main}
                        />
                        46,53%
                      </Box>
                    </TableRow>
                  </TableBody>
                </Box>
              </TableContainer>
            </Card>
          </Grid>
          <Grid item xs={12} xl={4}>
            <Card classes={{ root: classes.cardRoot }}>
              <CardHeader
                subheader={
                  <Grid
                    container
                    component={Box}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item xs="auto">
                      <Box
                        component={Typography}
                        variant="h3"
                        marginBottom="0!important"
                      >
                        Social traffic
                      </Box>
                    </Grid>
                    <Grid item xs="auto">
                      <Box
                        justifyContent="flex-end"
                        display="flex"
                        flexWrap="wrap"
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                        >
                          See all
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                }
                classes={{ root: classes.cardHeaderRoot }}
              ></CardHeader>
              <TableContainer>
                <Box
                  component={Table}
                  alignItems="center"
                  marginBottom="0!important"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Refferal
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Visitors
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      ></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        Facebook
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        1,480
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        <Box display="flex" alignItems="center">
                          <Box component="span" marginRight=".5rem">
                            60%
                          </Box>
                          <Box width="100%">
                            <LinearProgress
                              variant="determinate"
                              value={60}
                              classes={{
                                root: classes.linearProgressRoot,
                                bar: classes.bgGradientError,
                              }}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        Facebook
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        5,480
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        <Box display="flex" alignItems="center">
                          <Box component="span" marginRight=".5rem">
                            70%
                          </Box>
                          <Box width="100%">
                            <LinearProgress
                              variant="determinate"
                              value={70}
                              classes={{
                                root: classes.linearProgressRoot,
                                bar: classes.bgGradientSuccess,
                              }}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        Google
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        4,807
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        <Box display="flex" alignItems="center">
                          <Box component="span" marginRight=".5rem">
                            80%
                          </Box>
                          <Box width="100%">
                            <LinearProgress
                              variant="determinate"
                              value={80}
                              classes={{
                                root: classes.linearProgressRoot,
                                bar: classes.bgGradientPrimary,
                              }}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        Instagram
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        3,678
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        <Box display="flex" alignItems="center">
                          <Box component="span" marginRight=".5rem">
                            75%
                          </Box>
                          <Box width="100%">
                            <LinearProgress
                              variant="determinate"
                              value={75}
                              classes={{
                                root: classes.linearProgressRoot,
                                bar: classes.bgGradientInfo,
                              }}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead +
                            " " +
                            classes.borderBottomUnset,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        twitter
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.borderBottomUnset,
                        }}
                      >
                        2,645
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.borderBottomUnset,
                        }}
                      >
                        <Box display="flex" alignItems="center">
                          <Box component="span" marginRight=".5rem">
                            30%
                          </Box>
                          <Box width="100%">
                            <LinearProgress
                              variant="determinate"
                              value={30}
                              classes={{
                                root: classes.linearProgressRoot,
                                bar: classes.bgGradientWarning,
                              }}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Box>
              </TableContainer>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

let chartExample1 = {
  options: {
    scales: {
      yAxes: [
        {
          gridLines: {
            color: colors.gray[100],
            zeroLineColor: colors.gray[100],
          },
          ticks: {
            callback: function (value) {
              if (!(value % 10)) {
                return "$" + value + "k";
              }
            },
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        label: function (item, data) {
          var label = data.datasets[item.datasetIndex].label || "";
          var yLabel = item.yLabel;
          var content = "";

          if (data.datasets.length > 1) {
            content += label;
          }

          content += "$" + yLabel + "k";
          return content;
        },
      },
    },
  },
  data1: () => {
    return {
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Performance",
          data: [10, 0, 20, 10, 30, 15, 40, 20, 60, 60],
        },
      ],
    };
  },
  data2: () => {
    return {
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Performance",
          data: [100, 0, 20, 5, 25, 10, 30, 15, 40, 40],
        },
      ],
    };
  },
};

let chartExample2 = {
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            callback: function (value) {
              if (!(value % 10)) {
                //return '$' + value + 'k'
                return value;
              }
            },
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        label: function (item, data) {
          var label = data.datasets[item.datasetIndex].label || "";
          var yLabel = item.yLabel;
          var content = "";
          if (data.datasets.length > 1) {
            content += label;
          }
          content += yLabel;
          return content;
        },
      },
    },
  },
  data: {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Sales",
        data: [25, 20, 30, 22, 17, 29],
        maxBarThickness: 10,
      },
    ],
  },
};

export default Dashboard;
