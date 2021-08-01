import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './Header/Header'
import Navbar from './Navbar/Navbar'
import Slide from './Slide/Slide'
import Product from './Product/Product'
import Banner from './Banner/Banner'
import Footer from './Footer/Footer'

const Components = () => {

  return (
    <Router>
      <Header />
      <Navbar />
      <Slide />
      <Product title="sản phẩm" id={1}/>
      <Banner />
      <Product title="giày" id={3}/>
      <Footer/>
    </Router>
  );
};

export default Components;