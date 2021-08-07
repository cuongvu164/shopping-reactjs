import React from 'react';
import './product.scss'
import { useParams } from 'react-router-dom';

const SortCollection = () => {
  return (
    <div className="sort-collection">
      <div className="title">
        tất cả sản phẩm
      </div>
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