import React from "react";

// @material-ui/core components
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
import TablePagination from "@material-ui/core/TablePagination";
// @material-ui/icons components

// core components
import UserHeader from "../../components/Headers/UserHeader.js";

import componentStyles from "../../assets/theme/views/admin/tables.js";

const useStyles = makeStyles(componentStyles);

const Search = () => {
  const classes = useStyles();

  const [data, setData] = React.useState({
    refercode: null,
    totalrefer: null,
    transactionid: null,
    uid: null
  });
  const [list, setList] = React.useState([])

  React.useEffect(() => {
    const requestOptions = {
      credentials: 'include',
      mode: 'cors',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: null
  };
  
  fetch('https://mcashapi.xyz/api/v1/referfetch', requestOptions)
  .then(res => res.json())
  .then(doc => {
    setList({list: doc})
  })
  .catch(err => alert(err))
  }, [])

  const handleInputChange = e => {
    e.preventDefault();
    setData({...data, [e.target.name]: e.target.value})
  };

  const handleSubmit = () => {
    const requestOptions = {
      credentials: 'include',
      mode: 'cors',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  };
  
    fetch('https://mcashapi.xyz/api/v1/referfetch', requestOptions)
    .then(res => res.json())
    .then(doc => {
      setList({list: doc})
    })
    .catch(err => alert(err))
  }

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }; 

  function createData(l) {
    const listedObj = Object.values(l);
    return Object.values(listedObj).map(rows => {return Object.values(rows.data)})
  }

  const rows = createData(list);
  let rowslength = 0;

  rows.forEach(val => {rowslength = val.length})

  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        marginTop="-24rem"
        classes={{ root: classes.containerRoot }}
      >
        <Card classes={{ root: classes.cardRoot }}>
          <CardHeader
            className={classes.cardHeader}
            title="Refer"
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
            id="refercode"
            name="refercode"
            label="Refer Code"
            placeholder="Enter refer code here..."
            type="text"
            variant="outlined"
            margin="10px"
            value={data.refercode}
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
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  >
                    Refer Code
                  </TableCell>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  >
                    Total Refer
                  </TableCell>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  >
                    User ID
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {rows.map(val => (val.slice(page*rowsPerPage, page*rowsPerPage + rowsPerPage).map((row) => (
                  <>
                  <TableRow key={row.transactionid}>
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
                            {row.refercode}
                          </Box>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell classes={{ root: classes.tableCellRoot }}>
                      {row.totalrefer}
                    </TableCell>
                    <TableCell classes={{ root: classes.tableCellRoot }}>
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

export default Search;


