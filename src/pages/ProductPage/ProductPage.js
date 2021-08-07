import React from 'react';
import Product from '../../components/Product/Product'
import SideBar from '../../components/SideBar/SideBar'
import './productpage.scss'

const ProductPage = () => {
  return (
    <div className="main-content">
      <SideBar />
      <Product title="sản phẩm" visible={false} limitItem={20}/>
    </div>
  );
};

export default ProductPage;