import React from "react";

// @material-ui/core components
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
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
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors'
import TablePagination from '@material-ui/core/TablePagination';

// core components
import UserHeader from "../../components/Headers/UserHeader.js";

import componentStyles from "../../assets/theme/views/admin/tables.js";

const useStyles = makeStyles(componentStyles);

const Search = (props) => {
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
    refercode: null,
    paytmnumber: null,
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
    { id: 'refercode', label: 'Refer Code' },
    { id: 'paytmnumber', label: 'PayTM Number', align: "right" },
    { id: 'amount', label: 'Amount', align: "right" },
    { id: 'totalotheroffer', label: 'Total Other Offer', align: "right" },
    { id: 'totalredeem', label: 'Total Redeem', align: "right" },
    { id: 'totalsurvey', label: 'Total Survey', align: "right" },
    { id: 'totaltaskoffer', label: 'Total Task Offer', align: "right" },
    { id: 'uid', label: 'User ID'}
  ]

  function createData(l) {
    const listedObj = Object.values(l);
    return Object.values(listedObj).map(row => Object.entries(row.data).map((key, val) => {return key[1]}))
  }

  const rows = createData(list);

  let rowslength;
  rows.forEach(val => {rowslength = val.length})

  const [group, setGroup] = React.useState(new Set());

  const handleGroupBy = () => {
    rows.map(row => Object.values(row).map(r => group.add(r.amount)));
    setGroup(group);
  }

  let arr = [];

  group.forEach(val => arr.push(val));

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
            <Grid container xs={8} direction="row" justifyContent="flex-end" alignItems="center">
              <div>
                <FormControlLabel value="none" control={<BlueRadio
                  checked={radio === 'none'}
                  onChange={handleChange}
                />} label="None" />

                <FormControlLabel value="refercode" control={<BlueRadio
                  checked={radio === 'refercode'}
                  onChange={handleChange}
                />} label="Refer Code" />
                <FormControlLabel value="paytmnumber" control={<BlueRadio
                    checked={radio === 'paytmnumber'}
                    onChange={handleChange}
                  />} label="Paytm Number" />
                </div>
            </Grid>
            <Grid container xs={4} justifyContent="flex-end" alignItems="flex-end">
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
                    value={(radio==="refercode") ? data.refercode : data.paytmnumber }
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
              {/* <TableCell>
                  Select
              </TableCell> */}
            </TableRow>
              </TableHead>
              <TableBody>
              {rows.map(val => (val.slice(page*rowsPerPage, page*rowsPerPage + rowsPerPage).map((row) => (
                <>
                <TableRow hover key={row.refercode}>
                  <TableCell>
                    {row.date}
                  </TableCell>
                  <TableCell>
                    {row.refercode}
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
                  {/* <TableCell>
                  <Checkbox
                    className={classes.root}
                    disableRipple
                    color="default"
                    checked={checked[row.name]}
                    onChange={handleCheck}
                    name={row.refercode}
                    value={checked}
                    checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                    icon={<span className={classes.icon} />}
                    inputProps={{ 'aria-label': 'decorative checkbox' }}
                    {...props}
                  />
                  </TableCell> */}
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
          <Grid container xs={12} justifyContent="flex-end" alignItems="flex-end">
              <Box
                justifyContent="flex-end"
                display="flex"
                flexWrap="wrap"
              >
                <Button
                  variant="contained"
                  color="info"
                  margin="1rem!important"
                  onClick={() => {handleGroupBy(); handleClickOpen();}}
                  classes={classes.buttonRootUnselected}
                >
                  Group By Amount
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                  <DialogTitle id="form-dialog-title"><Typography component="h6">Select Amount Values</Typography></DialogTitle>
                  <DialogContent>
                    {arr.map(v => (
                      <FormControlLabel
                      control={
                        <Checkbox
                        className={classes.root}
                        disableRipple
                        color="default"
                        // checked={checked[row.name]}
                        // onChange={handleCheck}
                        // name={row.refercode}
                        // value={checked}
                        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                        icon={<span className={classes.icon} />}
                        inputProps={{ 'aria-label': 'decorative checkbox' }}
                        {...props}
                      />
                      }
                      label={"Amount Value: " + v}
                    />
                    )
                    )}
                  </DialogContent>
                </Dialog>
              </Box>
            </Grid>
        </Card>
      </Container>
    </>
  );
};

export default Search;