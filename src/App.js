import React, { Fragment } from 'react';
//import logo from './logo.svg';
//import './App.css';

import Service from './Service';
import Home from './Home';
//import Navigation from './navigation2';
import Navigation from './Navigation';
import Test from './Test';

import './css/core.css';

// import './css/avalanche.css';
// import './css/horizon.css';
// import './css/skin.css';
//import './css/test.css';

import ImageLoader from 'react-load-image';

const superagent = require('superagent');

// function Preloader(props) {
//   return <img src={require("./images/assets/preloader-gif.gif")} />;
// }

class App extends React.Component {

 
  render() {
    return(
       
      <Fragment>
        {/* <Preloader/> */}
        {/* <ImageLoader src="./images/assets/preloader-gif.gif" >
          <img/>
          <div>Error!</div>
          <Preloader/>
          </ImageLoader> */}
       <Navigation/>  
        
        {/* <Home/>
        <Service/> */}
        
      </Fragment>
      
    );
  }
}

export default App;
