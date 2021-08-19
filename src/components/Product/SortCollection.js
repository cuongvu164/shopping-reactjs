import React from 'react';
import './product.scss'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'

const SortCollection = () => {
  const params = useParams()
  const listCategory = useSelector(state => state.category.categorys)
  console.log('params sortcollection', listCategory)
  return (
    <div className="sort-collection">
      {
        Object.getOwnPropertyNames(params).length === 0 ?
          <div className="title">
            tất cả sản phẩm
          </div>
          : listCategory
            .filter(category => category.CategoryId === params.CategoryId)
            .map(category => {
              return (
                <div className="title" key={category.CategoryId}>
                  {category.Name}
                </div>
              )
            })
      }
      <div className="list-item">
        <span>sắp xếp theo:</span>
        <select name="sort" id="">
          <option value="1">Giá: Tăng dần</option>
          <option value="2">Giá: Giảm dần</option>
          <option value="3">Tên: A-Z</option>
        </select>
      </div>
    </div>
  );
};

export default SortCollection;