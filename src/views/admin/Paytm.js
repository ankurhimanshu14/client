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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { blue, blueGrey } from '@material-ui/core/colors'
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
// @material-ui/lab components
import Pagination from "@material-ui/lab/Pagination";
// @material-ui/icons components

// core components
import UserHeader from "../../components/Headers/UserHeader.js";

import componentStyles from "../../assets/theme/views/admin/tables.js";

const useStyles = makeStyles(componentStyles);

const Search = () => {
  const classes = useStyles();

  const [data, setData] = React.useState({
    paytmnumber: null,
    refercode: null,
    transactionid: null,
    uid: null
  });
  const [list, setList] = React.useState([])

  // const [search, setSearch] = React.useState(null);

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
    // setSearch(radio);
  };

  const listedObj = Object.values(list);
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        marginTop="3rem"
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
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  >
                    Paytm Number
                  </TableCell>
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
                    User ID
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.values(listedObj).map(row => (
                  Object.entries(row.data).map((key, values) => (
                    <>
                      <TableRow key={key[1].transactionid}>
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
                                {key[1].paytmnumber}
                              </Box>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell classes={{ root: classes.tableCellRoot }}>
                          {key[1].refercode}
                        </TableCell>
                        <TableCell classes={{ root: classes.tableCellRoot }}>
                          {key[1].uid}
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
            <Pagination rowLength={100} maxColumns={5} count={3} color="primary" variant="outlined" />
          </Box>
        </Card>
      </Container>
    </>
  );
};

export default Search;
