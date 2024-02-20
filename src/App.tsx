import React from 'react';
import './App.css';
import NavBarContainer from './Components/Navbar';
import Home from './Pages/Home/Home';
import mainStyles from './GloablStyles';

function App() {

  const {classes} = mainStyles();

  return (
    <>
      <div className={classes.root}>
        <NavBarContainer />
        <Home />
      </div>
    </>
  );
}

export default App;
