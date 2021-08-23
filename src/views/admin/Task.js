import React, { useState } from "react";

// @material-ui/core components
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
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
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import { red, yellow, blue } from '@material-ui/core/colors';

// core components
import UserHeader from "../../components/Headers/UserHeader.js";

import componentStyles from "../../assets/theme/views/admin/tables.js";

const useStyles = makeStyles(componentStyles);

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

  // const [data, setData] = React.useState();
  const [removetasks, setRemovetasks] = React.useState([])
  React.useEffect(() => {
      const requestOptions = {
        credentials: 'include',
        mode: 'cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({taskid: null})
      };
  
      fetch('https://mcashapi.xyz/api/v1/removetasksfetch', requestOptions)
        .then(res => res.json())
        .then(doc => {
          setRemovetasks({removetasks: doc})
        })
        .catch(err => alert(err))
  }, [])

  const [tasks, setTasks] = React.useState([])
  React.useEffect(() => {
      const requestOptions = {
        credentials: 'include',
        mode: 'cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({taskid: null})
      };
  
      fetch('https://mcashapi.xyz/api/v1/removetasksfetch', requestOptions)
        .then(res => res.json())
        .then(doc => {
          setTasks({tasks: doc})
        })
        .catch(err => alert(err))
  }, [])

  const handleDelete = (appId) => {
    const requestOptions = {
      credentials: 'include',
      mode: 'cors',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appId)
    };

    fetch('****', requestOptions)
      .then(res => res.json())
      .then(doc => setRemovetasks({list: doc}))
      .catch(err => {
        alert(err);
      })
  }

  const columns1 = [
    { id: 'appDescription', label: 'App Description'},
    { id: 'appId', label: 'App ID', align: "right" },
    { id: 'appImageUrl', label: 'Image', align: "center" },
    { id: 'appName', label: 'App Name', align: "right" },
    { id: 'appPackageName', label: 'Package Name', align: "right" },
    { id: 'appRewardAmount', label: 'Reward Amount', align: "right" },
    { id: 'caps', label: 'Caps', align: "right"},
    { id: 'completecaps', label: 'Complete Caps', align: "right" },
    { id: 'payout', label: 'Payout', align: "right"},
    { id: 'revenue', label: 'Revenue', align: "right"},
    { id: 'totalcap', label: 'Total Cap', align: "right"},
    { id: 'totalevents', label: 'Total Events', align: "right"},
    { id: 'del', label: 'Delete', align: "right"},
    { id: 'edit', label: 'Edit', align: "right"}
  ]

  const columns2 = [
    { id: 'appDescription', label: 'App Description'},
    { id: 'appId', label: 'App ID', align: "right" },
    { id: 'appImageUrl', label: 'Image', align: "center" },
    { id: 'appName', label: 'App Name', align: "right" },
    { id: 'appPackageName', label: 'Package Name', align: "right" },
    { id: 'appRewardAmount', label: 'Reward Amount', align: "right" },
    { id: 'caps', label: 'Caps', align: "right"},
    { id: 'completecaps', label: 'Complete Caps', align: "right" },
    { id: 'payout', label: 'Payout', align: "right"},
    { id: 'revenue', label: 'Revenue', align: "right"},
    { id: 'totalcap', label: 'Total Cap', align: "right"},
    { id: 'totalevents', label: 'Total Events', align: "right"},
  ]

  function createData(l) {
    const listedObj = Object.values(l);
    return Object.values(listedObj).map(row => Object.entries(row.data).map((key, val) => {return key[1]}))
  }

  const rows1 = createData(removetasks);
  let rowslength1;
  rows1.forEach(val => {rowslength1 = val.length})

  const rows2 = createData(tasks);
  let rowslength2;
  rows2.forEach(val => {rowslength2 = val.length})

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
            title="Task Actions"
            titleTypographyProps={{
              component: Box,
              marginBottom: "0!important",
              variant: "h3",
            }}
          ></CardHeader>
          {/* <Grid container xs={12}>
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
          </Grid> */}
          <TableContainer>
            <Box
              component={Table}
              alignItems="center"
              marginBottom="0!important"
            >
              <TableHead>
              <TableRow>
              {columns1.map((column) => (
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
              {rows1.map(val => (val.slice(page*rowsPerPage, page*rowsPerPage + rowsPerPage).map((row) => (
                <>
                <TableRow hover key={row.appId}>
                  <TableCell>
                    {row.appDescription}
                  </TableCell>
                  <TableCell align="right">
                    {row.appId}
                  </TableCell>
                  <TableCell align="right">
                  <Tooltip title={(row.eventdecription === undefined && row.eventdecription2 === undefined ) ? "" : row.eventdecription + " " + row.eventdecription2}>
                    <img src={row.appImageUrl} width="30rem"/>
                  </Tooltip>
                  </TableCell>
                  <TableCell align="right">
                  <a href={row.appUrl}>{row.appName}</a>
                  </TableCell>
                  <TableCell align="right">
                    {row.appPackageName}
                  </TableCell>
                  <TableCell align="right">
                    {row.appRewardAmount}
                  </TableCell>
                  <TableCell align="right">
                    {row.caps}
                  </TableCell>
                  <TableCell align="right">
                    {row.completecaps}
                  </TableCell>
                  <TableCell align="right">
                    {row.payout}
                  </TableCell>
                  <TableCell align="right">
                    {row.revenue}
                  </TableCell>
                  <TableCell align="right">
                    {row.totalcap}
                  </TableCell>
                  <TableCell align="right">
                    {row.totalevents}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton color={red[500]}><Delete onClick={() => handleDelete(row.appId) }/></IconButton>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton color={yellow[500]}><EditSharpIcon /></IconButton>
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
          {(rows1.length) ? <TablePagination
            rowsPerPageOptions={false}
            component="div"
            count={rowslength1}
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
        marginTop= "2rem"
        classes={{ root: classes.containerRoot }}
      >
        <Card classes={{ root: classes.cardRoot }}>
          <CardHeader
            className={classes.cardHeader}
            title="Tasks"
            titleTypographyProps={{
              component: Box,
              marginBottom: "0!important",
              variant: "h3",
            }}
          ></CardHeader>
          {/* <Grid container xs={12}>
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
          </Grid> */}
          <TableContainer>
            <Box
              component={Table}
              alignItems="center"
              marginBottom="0!important"
            >
              <TableHead>
              <TableRow>
              {columns2.map((column) => (
                <>
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              </>
              ))}
            </TableRow>
              </TableHead>
              <TableBody>
              {rows2.map(val => (val.slice(page*rowsPerPage, page*rowsPerPage + rowsPerPage).map((row) => (
                <>
                <TableRow hover key={row.appId}>
                  <TableCell>
                    {row.appDescription}
                  </TableCell>
                  <TableCell align="right">
                    {row.appId}
                  </TableCell>
                  <TableCell align="right">
                  <Tooltip title={(row.eventdecription === undefined && row.eventdecription2 === undefined ) ? "" : row.eventdecription + " " + row.eventdecription2}>
                    <img src={row.appImageUrl} width="30rem"/>
                  </Tooltip>
                  </TableCell>
                  <TableCell>
                  <a href={row.appUrl}>{row.appName}</a>
                  </TableCell>
                  <TableCell align="right">
                    {row.appPackageName}
                  </TableCell>
                  <TableCell align="right">
                    {row.appRewardAmount}
                  </TableCell>
                  <TableCell align="right">
                    {row.caps}
                  </TableCell>
                  <TableCell align="right">
                    {row.completecaps}
                  </TableCell>
                  <TableCell align="right">
                    {row.payout}
                  </TableCell>
                  <TableCell align="right">
                    {row.revenue}
                  </TableCell>
                  <TableCell align="right">
                    {row.totalcap}
                  </TableCell>
                  <TableCell align="right">
                    {row.totalevents}
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
          {(rows2.length) ? <TablePagination
            rowsPerPageOptions={false}
            component="div"
            count={rowslength2}
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