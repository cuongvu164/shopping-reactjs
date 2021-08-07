import React, { useState, useEffect } from 'react';
import * as url_api from '../../redux/actionTypes'
import axios from 'axios';
import { Link } from 'react-router-dom'
// import { Link as NavLink, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './sidebar.scss'

const SideBar = () => {
  const [categorys, setCategorys] = useState([])

  const fecthCategory = async () => {
    await axios.get(`${url_api.API_URL}/Category`)
      .then((response) => {
        setCategorys(response.data)
        console.log(response.data)
      })
  }

  useEffect(() => {
    fecthCategory()
  }, [])
  return (
    <>
      <div className="sidebar__group">
        <div className="sidebar__group--title">
          <h3>danh mục</h3>
        </div>
        <div className="sidebar__group--list-item">
          <ul>
            <li>
              <Link to="/product">tất cả sản phẩm</Link>
            </li>
            {
              categorys.map(category => {
                return (
                  <li key={category.CategoryId}>
                    <Link to={`/product/${category.CategoryId}`}>{category.Name}</Link>
                  </li>
                )
              })
            }


          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;