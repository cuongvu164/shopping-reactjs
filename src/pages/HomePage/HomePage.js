import React from 'react';
import Slide from '../../components/Slide/Slide'
import Product from '../../components/Product/Product'
import Banner from '../../components/Banner/Banner'

const HomePage= () => {
  return (
    <>
      <Slide />
      <Product title="sản phẩm" id={1}/>
      <Banner />
      <Product title="giày" id={3}/>
    </>
  );
};

export default HomePage;