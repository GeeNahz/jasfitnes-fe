import './App.css';
import Home from './components/Home';
// import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import { Routes, Route } from 'react-router-dom';

// import React, { useState, useEffect } from 'react';



function App() {

  // const [reviewsData, setReviewsData] = useState(null);

  // useEffect(() => {
  //   fetch("https://map.googleapis.com/maps/api/place/details/json?place_id=ChIJw8ikfwpzThAR_5aE2V8nNUs")
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  //   .catch(err => console.log(err))
  // }, []);


  return (
    <div className="default-font">
      {/* <Navbar /> */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
