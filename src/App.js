import React from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import Navbar from './components/Navbar';
import Grid from '@material-ui/core/Grid';

const App = () => {
  return (
    <>
    <Navbar />
    <Grid container xs={12} direction="column" justifyContent="flex-end" alignItems="flex-center">
      <LineChart />
      <BarChart />
    </Grid>
    </>
  )
}

export default App;