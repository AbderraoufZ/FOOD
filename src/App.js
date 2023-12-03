import React from 'react'
import './App.css';

import Header from './companents/header/Header'
import Home from './companents/home/Home'
import Menu from './companents/menu/Menu'
import AboutUs from './companents/aboutUs/AboutUs'
import Footer from './companents/footer/Footer'
function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Menu/>
      <AboutUs/>
      <Footer/>
    </>
  );
}

export default App;
