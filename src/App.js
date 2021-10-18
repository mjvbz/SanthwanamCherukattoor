import React from 'react';
import './css/App.css';
import Navbar from './components/main/Navbar'
import Banner from './components/index/banner';
import About from './components/index/about';
import Services from './components/index/services';
import Footer from './components/main/footer';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
