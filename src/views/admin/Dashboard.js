import componentStyles from "../../assets/theme/views/admin/dashboard.js";
import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
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

// import handleDate from '../../handleDate';

const themeColors = require("../../assets/theme/colors.js").default;

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
  const classes = useStyles();
  const theme = useTheme();
  const [activeNav, setActiveNav] = React.useState(1);
  const [chartExample1Data, setChartExample1Data] = React.useState("data1");

  const [date, setDate] = React.useState({
    startDate: null,
    endDate: null
  });

  const [list, setList] = React.useState([]);

  const handleInputChange = e => {
    setDate({
      ...date,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = () => {

    const requestOptions = {
        credentials: 'include',
        mode: 'cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(date)
    };
    
    fetch('https://mcashapi.xyz/api/v1/filteranalytics', requestOptions)
    .then(res => res.json())
    .then(doc => {
        setList({list: doc})
    })
    .catch(err => {
        alert('There has been a problem with your fetch operation: ' + err);
    });
}

console.log(Object.values(list)[0]);

  return (
    <>
      <Header />
      
      <Container
        maxWidth={false}
        component={Box}
        marginTop="-9rem"
        classes={{ root: classes.containerRoot }}
      >
        <Grid container component={Box} marginTop="3rem">
          <Grid
            item
            xs={12}
            xl={12}
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
                      margin="10px"
                      value={date.startDate}
                      onChange={handleInputChange}
                      />
                      <TextField
                      id="endDate"
                      name="endDate"
                      type="date"
                      variant="outlined"
                      margin="10px"
                      value={date.endDate}
                      onChange={handleInputChange}
                      />
                        <Button
                          variant="contained"
                          color="primary"
                          component={Box}
                          margin="1rem!important"
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
                        Date
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Payment
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Clicks
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Conversion
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        CR
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Payout
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Revenue
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      {list.map(val => 
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
                            {/* {val.data.key} */}
                          </TableCell>
                          <TableCell classes={{ root: classes.tableCellRoot }}>
                            {val.payment}
                          </TableCell>
                          <TableCell classes={{ root: classes.tableCellRoot }}>
                            {val.totalclicks}
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
                      )}
                  </TableBody>
                </Box>
              </TableContainer>
            </Card>
          </Grid>
        
        <Grid container>
          <Grid
            item
            xs={12}
            xl={12}
            component={Box}
            margin="3rem!important"
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
                        marginTop=".5rem!important"
                        className={classes.textUppercase}
                      >zz
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
          label: ["Performance", "Sales"],
          data: [[10, 0, 20, 10, 30, 15, 40, 20, 60, 60], [100, 0, 20, 5, 25, 10, 30, 15, 40, 40]]
        },
      ],
    };
  }
};

export default Dashboard;
