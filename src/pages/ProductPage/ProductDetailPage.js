import React from 'react';
import SideBar from '../../components/SideBar/SideBar'
import ProductDetail from '../../components/Product/ProductDetail'
import './productpage.scss'

const ProductDetailPage = () => {
  return (
    <div className="main-content">
      <SideBar/>
      <ProductDetail/>
    </div>
  );
};

export default ProductDetailPage;