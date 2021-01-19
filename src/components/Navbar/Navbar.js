import React from 'react';
import {
  Link,
  BrowserRouter as Router 
} from 'react-router-dom'
import './style.scss'

const Navbar = () => {
  return (
    <Router>
      <div className="navbar">
        <div className="navbar__container">
          <div className="navbar__container--left">
            <ul>
              <li>
                <Link to="/">trang chủ</Link>
              </li>
              <li>
                <Link to="/">sản phẩm</Link>
              </li> 
              <li className="dropdown-menu">
                <Link to="/">hướng dẫn<i className="fas fa-caret-down"></i></Link>
                <ul className="dropdown-item">
                  <li><Link to="/">Hướng dẫn mua hàng</Link></li>
                  <li><Link to="/">Tài khoản ngân hàng</Link></li>
                  <li><Link to="/">Cách đo size giày</Link></li>
                </ul>
              </li>
              <li className="dropdown-menu">
                <Link to="/">chính sách<i className="fas fa-caret-down"></i></Link>
                <ul className="dropdown-item">
                  <li><Link to="/">Chính sách vận chuyển</Link></li>
                  <li><Link to="/">Chính sách đổi trả</Link></li>
                  <li><Link to="/">Chính sách thanh toán</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/">tin tức</Link>
              </li>
              <li>
                <Link to="/">giới thiệu</Link>
              </li>
              <li>
                <Link to="/">liên hệ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;