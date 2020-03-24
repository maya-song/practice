import React, { Fragment } from 'react';
//import logo from './logo.svg';
//import './App.css';

import Service from './Service';
import Home from './Home';
import Navigation from './Navigation';

import './css/core.min.css';

// import './css/avalanche.css';
// import './css/horizon.css';
// import './css/skin.css';

const superagent = require('superagent');

class App extends React.Component {

  render() {
    return(
      <Fragment>
        <Navigation/>
        <Home/>
        <Service/>
      </Fragment>
    );
  }
}

export default App;
