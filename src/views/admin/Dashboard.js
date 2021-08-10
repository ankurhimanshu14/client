import componentStyles from "../../assets/theme/views/admin/dashboard.js";
import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from '@material-ui/core/Paper';
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
  const [chartData, setChartData] = React.useState(
    {
      labels: [],
      datasets: [
        {
          label: ['Payment', 'Clicks', 'Conversion', 'Cr', 'Payout', 'Revenue'],
          data: [],
          fill: false,          
          borderColor: 'green'
        }
      ]
    }
  );

  const [date, setDate] = React.useState({
    startDate: null,
    endDate: null,
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
        setChartData(
          {
            labels: Object.keys(Object.values(list)[0].data),
            datasets: [
              {
                label: ['Payment', 'Clicks'],
                data: [[1, 1], [2, 3]],
                fill: false,          
                borderColor: 'white'
              }
            ]
          }
        )
    })
    .catch(err => {
        alert('There has been a problem with your fetch operation: ' + err);
    });
}

const listedObj = Object.values(list);

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
                        Analytics
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
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell align="right">Payment</TableCell>
                      <TableCell align="right">Clicks</TableCell>
                      <TableCell align="right">Conversion</TableCell>
                      <TableCell align="right">Cr</TableCell>
                      <TableCell align="right">Payout</TableCell>
                      <TableCell align="right">Revenue</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Object.values(listedObj).map(row => (
                      Object.entries(row.data).map((key, value) => (
                        <>
                        <TableRow>
                          <TableCell>{key[0]}</TableCell>
                          <TableCell align="right">{key[1].payment}</TableCell>
                          <TableCell align="right">{key[1].totalclicks}</TableCell>
                          <TableCell align="right">{key[1].totalconversion}</TableCell>
                          <TableCell align="right">{key[1].totalcr}</TableCell>
                          <TableCell align="right">{key[1].totalpayout}</TableCell>
                          <TableCell align="right">{key[1].totalrevenue}</TableCell>
                        </TableRow>
                        </>
                      ))
                    ))}
                  </TableBody>
                </Table>
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
                          Analytics
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                }
                classes={{ root: classes.cardHeaderRoot }}
              ></CardHeader>
              <CardContent>
                <Box position="relative" height="350px" width="100%">
                  <Line data = {chartData}/>
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

export default Dashboard;
