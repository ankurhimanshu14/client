import componentStyles from "../../assets/theme/views/admin/dashboard.js";
import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";

// core components
import Header from "../../components/Headers/Header.js";

// import handleDate from '../../handleDate';

const useStyles = makeStyles(componentStyles);

function Dashboard() {

  const classes = useStyles();
  const [chartData, setChartData] = React.useState(
    {
      labels: [],
      backgroundColor: 'blue',
      datasets: [
        {
          label: 'Payment',
          data: [],
          fill: false,          
          borderColor: 'black',
          lineTension: 0,
        },
        {
          label: 'Clicks',
          data: [],
          fill: false,          
          borderColor: 'blue',
          lineTension: 0,
        },
        {
          label: 'Conversion',
          data: [],
          fill: false,          
          borderColor: 'green',
          lineTension: 0,
        },
        {
          label: 'Cr',
          data: [],
          fill: false,          
          borderColor: 'yellow',
          lineTension: 0,
        },
        {
          label: 'Payout',
          data: [],
          fill: false,          
          borderColor: 'red',
          lineTension: 0,
        },
        {
          label: 'Revenue',
          data: [],
          fill: false,          
          borderColor: 'orange',
          lineTension: 0,
        }
      ]
    }
  );

  const [date, setDate] = React.useState({
    startDate: `${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-1`,
    endDate: `${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()-1}`
  });

  React.useState(() => {
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
            labels: Object.keys(doc.data),
            backgroundColor: 'white',
            datasets: [
              {
                label: 'Payment',
                data: Object.values(doc.data).map(row => {return row.payment}),
                lineTension: 0,
                fill: false,          
                borderColor: 'black',
              },
              {
                label: 'Clicks',
                data: Object.values(doc.data).map(row => {return row.totalclicks}),
                lineTension: 0,
                fill: false,          
                borderColor: 'blue'
              },
              {
                label: 'Conversion',
                data: Object.values(doc.data).map(row => {return row.totalconversion}),
                lineTension: 0,
                fill: false,          
                borderColor: 'green'
              },
              {
                label: 'Cr',
                data: Object.values(doc.data).map(row => {return row.totalcr}),
                lineTension: 0,
                fill: false,          
                borderColor: 'yellow'
              },
              {
                label: 'Payout',
                data: Object.values(doc.data).map(row => {return row.totalpayout}),
                lineTension: 0,
                fill: false,          
                borderColor: 'red'
              },
              {
                label: 'Revenue',
                data: Object.values(doc.data).map(row => {return row.totalrevenue}),
                lineTension: 0,
                fill: false,          
                borderColor: 'orange'
              }
            ]
          }
        )
    })
    .catch(err => {
      setChartData(
        {
          labels: [],
          backgroundColor: 'white',
          datasets: [
            {
              label: 'Payment',
              data: null,
              fill: false,          
              borderColor: 'white'
            },
            {
              label: 'Clicks',
              data: null,
              fill: false,          
              borderColor: 'lightblue'
            },
            {
              label: 'Conversion',
              data: null,
              fill: false,          
              borderColor: 'green'
            },
            {
              label: 'Cr',
              data: null,
              fill: false,          
              borderColor: 'yellow'
            },
            {
              label: 'Payout',
              data: null,
              fill: false,          
              borderColor: 'red'
            },
            {
              label: 'Revenue',
              data: null,
              fill: false,          
              borderColor: 'orange'
            }
          ]
        }
      )
    });
  })

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
            labels: Object.keys(doc.data),
            backgroundColor: 'white',
            datasets: [
              {
                label: 'Payment',
                data: Object.values(doc.data).map(row => {return row.payment}),
                lineTension: 0,
                fill: false,          
                borderColor: 'black',
              },
              {
                label: 'Clicks',
                data: Object.values(doc.data).map(row => {return row.totalclicks}),
                lineTension: 0,
                fill: false,          
                borderColor: 'blue'
              },
              {
                label: 'Conversion',
                data: Object.values(doc.data).map(row => {return row.totalconversion}),
                lineTension: 0,
                fill: false,          
                borderColor: 'green'
              },
              {
                label: 'Cr',
                data: Object.values(doc.data).map(row => {return row.totalcr}),
                lineTension: 0,
                fill: false,          
                borderColor: 'yellow'
              },
              {
                label: 'Payout',
                data: Object.values(doc.data).map(row => {return row.totalpayout}),
                lineTension: 0,
                fill: false,          
                borderColor: 'red'
              },
              {
                label: 'Revenue',
                data: Object.values(doc.data).map(row => {return row.totalrevenue}),
                lineTension: 0,
                fill: false,          
                borderColor: 'orange'
              }
            ]
          }
        )
    })
    .catch(err => {
      setChartData(
        {
          labels: [],
          backgroundColor: 'white',
          datasets: [
            {
              label: 'Payment',
              data: null,
              fill: false,          
              borderColor: 'white'
            },
            {
              label: 'Clicks',
              data: null,
              fill: false,          
              borderColor: 'lightblue'
            },
            {
              label: 'Conversion',
              data: null,
              fill: false,          
              borderColor: 'green'
            },
            {
              label: 'Cr',
              data: null,
              fill: false,          
              borderColor: 'yellow'
            },
            {
              label: 'Payout',
              data: null,
              fill: false,          
              borderColor: 'red'
            },
            {
              label: 'Revenue',
              data: null,
              fill: false,          
              borderColor: 'orange'
            }
          ]
        }
      )
    });
}

const options = {
  scales: {
    yAxes: [
      {
        gridLines: {
          color: "white"
        }
      }
    ],
    xAxes: [
      {
        gridLines: {
          color: "white"
        }
      }
    ]
  }
};

const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(10);

const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
}; 

const columns = [
  { id: 'date', label: 'Date' },
  { id: 'payment', label: 'Payment', align: 'right' },
  { id: 'totalclicks', label: 'Clicks', align: "right" },
  { id: 'totalconversion', label: 'Conversion', align: "right" },
  { id: 'totalcr', label: 'Cr', align: "right" },
  { id: 'totalpayout', label: 'Payout', align: "right" },
  { id: 'totalrevenue', label: 'Revenue', align: "right" }
];

function createData(l) {
  const listedObj = Object.values(l);
  return Object.values(listedObj).map(row => {return Object.entries(row.data)})
}

const rows = createData(list);

let rowslength = 0;

rows.forEach(val => {rowslength = val.length})

  return (
    <>
      <Header />
      
      <Container
        maxWidth={false}
        component={Box}
        marginTop="-9rem"
        classes={{ root: classes.containerRoot }}
      >
      <Card classes={{ root: classes.cardRoot }}>
          <CardHeader
            className={classes.cardHeader}
            title="Analytics"
            titleTypographyProps={{
              component: Box,
              marginTop: "3!important",
              marginBottom: "0!important",
              variant: "h3",
            }}
          />
          <Grid container xs={12}>
          <Grid container xs={12} justifyContent="flex-end" alignItems="flex-end">
            <Box
              justifyContent="flex-end"
              display="flex"
              flexWrap="wrap"
            >
            <form className={classes.textfieldContainer} noValidate>
            <TextField
            id="startDate"
            name="startDate"
            label="Start Date"
            defaultValue="24-05-2021"
            InputLabelProps={{
              shrink: true,
            }}
            type="date"
            variant="outlined"
            margin="10px"
            value={date.startDate}
            onChange={handleInputChange}
            className={classes.textField}
            />
            <TextField
            id="endDate"
            name="endDate"
            label="End Date"
            InputLabelProps={{
              shrink: true,
            }}
            type="date"
            variant="outlined"
            margin="10px"
            value={date.endDate}
            onChange={handleInputChange}
            className={classes.textField}
            />
            <Button
              variant="contained"
              color="info"
              margin="1rem!important"
              onClick={() => handleSubmit() }
              classes={classes.buttonRootUnselected}
            >
              Submit
            </Button>
            </form>
            </Box>
            </Grid>
            </Grid>
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
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  >
                    Date
                  </TableCell>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  >
                    Payment({<span>&#8377;</span>})
                  </TableCell>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  >
                    Clicks
                  </TableCell>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  >
                    Conversion
                  </TableCell>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  >
                    Cr(%)
                  </TableCell>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  >
                    Payout({<span>&#8377;</span>})
                  </TableCell>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  >
                    Revenue({<span>&#8377;</span>})
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {rows.map(val => (val.slice(page*rowsPerPage, page*rowsPerPage + rowsPerPage).map((row) => (
                  <>
                <TableRow hover key={row[0]}>
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
                    <Box alignItems="center" display="flex">
                      <Box display="flex" alignItems="flex-start">
                        <Box fontSize=".875rem" component="span">
                          {row[0]}
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCellRoot }}>
                    {row[1].payment}
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCellRoot }}>
                    <Box paddingTop=".35rem" paddingBottom=".35rem">
                      <Box
                        marginRight="10px"
                        component="i"
                        width=".375rem"
                        height=".375rem"
                        borderRadius="50%"
                        display="inline-block"
                        className={
                          classes.verticalAlignMiddle + " " + classes.bgWarning
                        }
                      ></Box>
                      {row[1].totalclicks}
                    </Box>
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCellRoot }}>
                    <Box paddingTop=".35rem" paddingBottom=".35rem">
                      <Box
                        marginRight="10px"
                        component="i"
                        width=".375rem"
                        height=".375rem"
                        borderRadius="50%"
                        display="inline-block"
                        className={
                          classes.verticalAlignMiddle + " " + classes.bgWarning
                        }
                      ></Box>
                      {row[1].totalconversion}
                    </Box>
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCellRoot }}>
                    <Box paddingTop=".35rem" paddingBottom=".35rem">
                      <Box
                        marginRight="10px"
                        component="i"
                        width=".375rem"
                        height=".375rem"
                        borderRadius="50%"
                        display="inline-block"
                        className={
                          classes.verticalAlignMiddle + " " + classes.bgWarning
                        }
                      ></Box>
                      {row[1].totalcr}
                    </Box>
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCellRoot }}>
                    <Box paddingTop=".35rem" paddingBottom=".35rem">
                      <Box
                        marginRight="10px"
                        component="i"
                        width=".375rem"
                        height=".375rem"
                        borderRadius="50%"
                        display="inline-block"
                        className={
                          classes.verticalAlignMiddle + " " + classes.bgWarning
                        }
                      ></Box>
                      {row[1].totalpayout}
                    </Box>
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCellRoot }}>
                    <Box paddingTop=".35rem" paddingBottom=".35rem">
                      <Box
                        marginRight="10px"
                        component="i"
                        width=".375rem"
                        height=".375rem"
                        borderRadius="50%"
                        display="inline-block"
                        className={
                          classes.verticalAlignMiddle + " " + classes.bgWarning
                        }
                      ></Box>
                      {row[1].totalrevenue}
                    </Box>
                  </TableCell>
                  </TableRow>
                </>
                      ))
                    ))}
              </TableBody>
            </Box>
          </TableContainer>
          <Box
            classes={{ root: classes.cardActionsRoot }}
            component={CardActions}
            justifyContent="flex-end"
          >
          {(rows.length) ? <TablePagination
            rowsPerPageOptions={false}
            component="div"
            count={rowslength}
            backgroundColor="primary"
            variant="outlined"
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> : null}
          </Box>
        </Card>
        <Card classes={{ root: classes.cardRoot }}>
          <CardHeader
            className={classes.cardHeader}
            title="Analytics"
            titleTypographyProps={{
              component: Box,
              marginTop: "3!important",
              marginBottom: "0!important",
              variant: "h3",
            }}
          ></CardHeader>
          <Grid container xs={12} marginTop="3rem">
              <CardContent>
                <Box position="relative" height="auto">
                  <Line
                    data={chartData}
                    options={options}
                  />
                </Box>
              </CardContent>
            </Grid>
        </Card>     
      </Container>
    </>
  );
}

export default Dashboard;
