/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect } from 'react';
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getCategoryResult} from '../../redux/actions/category'
import './sidebar.scss'

const SideBar = () => {
  const dispatch = useDispatch()
  const listCategory = useSelector(state => state.category.categorys)
  console.log('listcategory--',listCategory)
  useEffect(() => {
    dispatch(getCategoryResult())
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
              listCategory.map(category => {
                return (
                  <li key={category.CategoryId}>
                    <Link to={`/product/categoryid=${category.CategoryId}`}>{category.Name}</Link>
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