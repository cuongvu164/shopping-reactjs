import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import './style.scss'
import '../../font awesome/css/all.min.css'

const Header = () => {
  return (
    <Router>
      <div className="header">
        <div className="header__container">
          <div className="logo">
            <a href="/a">
              <img src="https://theme.hstatic.net/1000239816/1000467243/14/logo.png?v=186"/>
            </a>
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
    </Router>
  )
}

export default Header