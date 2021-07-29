import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LineChart from './components/LineChart';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
    <Navbar />
    <LineChart />
    </>
  )
}

export default App;