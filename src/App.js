import React from 'react';
import LineChart from './components/LineChart';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
    <Navbar />
    <LineChart name="sales"/>
    </>
  )
}

export default App;