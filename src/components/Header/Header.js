import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './header.scss'
import '../../font awesome/css/all.min.css'

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__container">
          <div className="logo">
            <Link to="/">
              <img src="https://theme.hstatic.net/1000239816/1000467243/14/logo.png?v=186"/>
            </Link>
          </div>
          <div className="header__aside">
            <div className="header__aside--infor">
              <div className="header__aside--infor-top">
                <ul>
                  <li>
                    <span><i className="fas fa-phone-alt"></i>08.88.37.29.29</span>
                  </li>
                  <li>
                    <Link to="/">đăng ký</Link>
                  </li>
                  <li>
                    <Link to="/">đăng nhập</Link>
                  </li>
                </ul>
              </div>
              <div className="header__aside--infor-bottom">
                <p>miễn phí vận chuyển toàn quốc</p>
              </div>
            </div>
            <div className="header__aside--basket">
              <Link to="/">
                <i className="fas fa-shopping-bag"></i>
                <div className="cart-number">0</div>
              </Link> 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header