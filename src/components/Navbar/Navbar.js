import React,{ useState} from 'react';
import {
  Link
} from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
  const [active, setActive] = useState('')
  return (
    <>
      <div className="navbar">
        <div className="navbar__container">
          <div className="navbar__container--left">
            <ul className="main-menu">
              <li className={!active ? 'active' : ''}>
                <Link to="/" onClick={() => setActive('')}>trang chủ</Link>
              </li>
              <li className={active === 'product' ? 'active' : ''}>
                <Link to="/product" onClick={() => setActive('product')}>sản phẩm</Link>
              </li> 
              <li className="dropdown-menu" className={active === 'tutorial' ? 'active' : ''}>
                <Link to="/"  onClick={() => setActive('tutorial')}>hướng dẫn<i className="fas fa-caret-down"></i></Link>
                <ul className="dropdown-item">
                  <li><Link to="/">Hướng dẫn mua hàng</Link></li>
                  <li><Link to="/">Tài khoản ngân hàng</Link></li>
                  <li><Link to="/">Cách đo size giày</Link></li>
                </ul>
              </li>
              <li className="dropdown-menu" className={active === 'policy' ? 'active' : ''}>
                <Link to="/" onClick={() => setActive('policy')}>chính sách<i className="fas fa-caret-down"></i></Link>
                <ul className="dropdown-item">
                  <li><Link to="/">Chính sách vận chuyển</Link></li>
                  <li><Link to="/">Chính sách đổi trả</Link></li>
                  <li><Link to="/">Chính sách thanh toán</Link></li>
                  <li><Link to="/">Chính sách bảo mật</Link></li>
                  <li><Link to="/">Chính sách bảo hành</Link></li>
                </ul>
              </li>
              <li className={active === 'new' ? 'active' : ''}>
                <Link to="/" onClick={() => setActive('new')}>tin tức</Link>
              </li>
              <li className={active === 'intro' ? 'active' : ''}>
                <Link to="/" onClick={() => setActive('intro')}>giới thiệu</Link>
              </li>
              <li className={active === 'contact' ? 'active' : ''}>
                <Link to="/" onClick={() => setActive('contact')}>liên hệ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;