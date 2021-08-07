import React from 'react';
import Slide from '../../components/Slide/Slide'
import Product from '../../components/Product/Product'
import Banner from '../../components/Banner/Banner'

const HomePage= () => {
  return (
    <>
      <Slide />
      <Product title="sản phẩm" visible={true} limitItem={8}/>
      <Banner />
      <Product title="giày" id={3} visible={true} limitItem={8}/>
    </>
  );
};

export default HomePage;