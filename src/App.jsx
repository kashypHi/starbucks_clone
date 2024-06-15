
import React, { useRef, useState } from 'react';


// import './styles.css';


//import navbar
import Navbar from './Navbar';
// import knowbar
import Knowmor from './Knowmor';
// import Ordernow
import Ordernow from "./Ordernow";
// import Slider
import Slider from './Slider';
// import Discover
import DiscoverMore from './DiscoverMore';
//import footer
import Footer from './Footer';


const App = () => {
  return (
    <>
      {/* <Navbar /> */}
    
      <Ordernow />
      <Knowmor />
      <br />
      <Slider />
      <DiscoverMore />
      <Footer/>
    </>
  )
}

export default App;
