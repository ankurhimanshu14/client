import React from "react";

// @material-ui/core components
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors'
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import EditSharpIcon from '@material-ui/icons/EditSharp';

// core components
import UserHeader from "../../components/Headers/UserHeader.js";

import componentStyles from "../../assets/theme/views/admin/tables.js";

const useStyles = makeStyles(componentStyles);

let arr = [];

const Task = (props) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };  

  const [data, setData] = React.useState({
    date: null,
    taskid: null,
    amount: null,
    totalotheroffer: null,
    totalredeem: null,
    totalsurvey: null,
    totaltaskoffer: null,
    uid: null,
  });
  const [list, setList] = React.useState([])

  const [radio, setRadio] = React.useState('none');

  React.useEffect(() => {
    if (radio === 'none') {
      const requestOptions = {
        credentials: 'include',
        mode: 'cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: null
      };
  
      fetch('https://mcashapi.xyz/api/v1/paytmredeemfetch', requestOptions)
        .then(res => res.json())
        .then(doc => {
          setList({list: doc})
        })
        .catch(err => alert(err))
    }
  }, [radio])

  const handleInputChange = e => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value })
  };

  const handleSubmit = () => {
    console.log(data);
    const requestOptions = {
      credentials: 'include',
      mode: 'cors',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };

    fetch('https://mcashapi.xyz/api/v1/paytmredeemfetch', requestOptions)
      .then(res => res.json())
      .then(doc => {
        if (doc.data) {
          setList({ list: doc })
        } else {
          alert("Value not found");
        }
      })
      .catch(err => {
        alert(err);
      })
  }

  const BlueRadio = withStyles({
    root: {
      color: blue[400],
      '&$checked': {
        color: blue[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  const handleChange = (event) => {
    setRadio(event.target.value);
  };

  const columns = [
    { id: 'date', label: 'Date' },
    { id: 'taskid', label: 'Task ID', align: "right" },
    { id: 'amount', label: 'Amount', align: "right" },
    { id: 'totalotheroffer', label: 'Total Other Offer', align: "right" },
    { id: 'totalredeem', label: 'Total Redeem', align: "right" },
    { id: 'totalsurvey', label: 'Total Survey', align: "right" },
    { id: 'totaltaskoffer', label: 'Total Task Offer', align: "right" },
    { id: 'uid', label: 'User ID', align: "right"}
  ]

  function createData(l) {
    const listedObj = Object.values(l);
    return Object.values(listedObj).map(row => Object.entries(row.data).map((key, val) => {return key[1]}))
  }

  const rows = createData(list);

  let rowslength;
  rows.forEach(val => {rowslength = val.length})

  return (
    <>
      <UserHeader />
      <Container
        maxWidth={false}
        component={Box}
        marginTop="-24rem"
        classes={{ root: classes.containerRoot }}
      >
        <Card classes={{ root: classes.cardRoot }}>
          <CardHeader
            className={classes.cardHeader}
            title="PayTM Analytics"
            titleTypographyProps={{
              component: Box,
              marginBottom: "0!important",
              variant: "h3",
            }}
          ></CardHeader>
          <Grid container xs={12}>
            <Grid container xs={12} justifyContent="flex-end" alignItems="flex-end">
              <Box
                justifyContent="flex-end"
                display="flex"
                flexWrap="wrap"
              >
                <form className={classes.textfieldContainer} noValidate>
                  <TextField
                    id={radio}
                    name={radio}
                    label="Search"
                    type="text"
                    variant="outlined"
                    margin="10px"
                    value={(radio==="taskid") ? data.taskid : data.paytmnumber }
                    onChange={handleInputChange}
                    className={classes.textField}
                  />
                  <Button
                    variant="contained"
                    color="info"
                    margin="1rem!important"
                    onClick={handleSubmit}
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
              {columns.map((column) => (
                <>
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              </>
              ))}
            </TableRow>
              </TableHead>
              <TableBody>
              {rows.map(val => (val.slice(page*rowsPerPage, page*rowsPerPage + rowsPerPage).map((row) => (
                <>
                <TableRow hover key={row.taskid}>
                  <TableCell>
                    {row.date}
                  </TableCell>
                  <TableCell>
                    {row.taskid}
                  </TableCell>
                  <TableCell align="right">
                    {row.paytmnumber}
                  </TableCell>
                  <TableCell align="right">
                    {row.amount}
                  </TableCell>
                  <TableCell align="right">
                    {row.totalotheroffer}
                  </TableCell>
                  <TableCell align="right">
                    {row.totalredeem}
                  </TableCell>
                  <TableCell align="right">
                    {row.totalsurvey}
                  </TableCell>
                  <TableCell align="right">
                    {row.totaltaskoffer}
                  </TableCell>
                  <TableCell>
                    {row.uid}
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
      </Container>
      <Container
        maxWidth={false}
        component={Box}
        marginTop="-24rem"
        classes={{ root: classes.containerRoot }}
      >
        <Card classes={{ root: classes.cardRoot }}>
          <CardHeader
            className={classes.cardHeader}
            title="PayTM Analytics"
            titleTypographyProps={{
              component: Box,
              marginBottom: "0!important",
              variant: "h3",
            }}
          ></CardHeader>
          <Grid container xs={12}>
            <Grid container xs={12} justifyContent="flex-end" alignItems="flex-end">
              <Box
                justifyContent="flex-end"
                display="flex"
                flexWrap="wrap"
              >
                <form className={classes.textfieldContainer} noValidate>
                  <TextField
                    id={radio}
                    name={radio}
                    label="Search"
                    type="text"
                    variant="outlined"
                    margin="10px"
                    value={(radio==="taskid") ? data.taskid : data.paytmnumber }
                    onChange={handleInputChange}
                    className={classes.textField}
                  />
                  <Button
                    variant="contained"
                    color="info"
                    margin="1rem!important"
                    onClick={handleSubmit}
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
              {columns.map((column) => (
                <>
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              </>
              ))}
            </TableRow>
              </TableHead>
              <TableBody>
              {rows.map(val => (val.slice(page*rowsPerPage, page*rowsPerPage + rowsPerPage).map((row) => (
                <>
                <TableRow hover key={row.taskid}>
                  <TableCell>
                    {row.date}
                  </TableCell>
                  <TableCell>
                    {row.taskid}
                  </TableCell>
                  <TableCell align="right">
                    {row.paytmnumber}
                  </TableCell>
                  <TableCell align="right">
                    {row.amount}
                  </TableCell>
                  <TableCell align="right">
                    {row.totalotheroffer}
                  </TableCell>
                  <TableCell align="right">
                    {row.totalredeem}
                  </TableCell>
                  <TableCell align="right">
                    {row.totalsurvey}
                  </TableCell>
                  <TableCell align="right">
                    {row.totaltaskoffer}
                  </TableCell>
                  <TableCell>
                    {row.uid}
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
      </Container>
    </>
  );
};

export default Task;