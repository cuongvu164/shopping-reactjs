import React, { useState, useEffect } from 'react';
import {
  Link,
  useParams
} from 'react-router-dom'
import './product.scss'
import SortCollection from './SortCollection';
import '../../font awesome/css/all.min.css'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import {getProductResult, getProductCategoryByIDResult} from '../../redux/actions/product'
import {addToCart} from '../../redux/actions/cart'

const Product = (props) => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)
  
  const params = useParams()
  console.log('param', params)

  const convertMoney = (money) => {
    const lengthNumber = money.toString().length

    const stringNumber = money.toString()
    if (lengthNumber > 4) {
      let count = 0
      let count2 = 0
      let reverseNumber = stringNumber.split('').reverse()
      for (let i = 1; i <= lengthNumber; i++) {
        if (i % 3 === 0) {
          count++
          reverseNumber.splice(3 * count + count2, 0, '.')
          count2++
          reverseNumber.slice(1)
        }

      }
      reverseNumber.reverse()
      var result = reverseNumber.join('')

      if (reverseNumber[0] === '.') {
        result = reverseNumber.slice(1).join('')
      } else {
        result = reverseNumber.join('')
      }
    }
    // console.log('money',result)
    return result
  }

var listProduct = useSelector(state => state.product.products)

  useEffect(() => {
    if (Object.getOwnPropertyNames(params).length !== 0 || props.id > 0) {
      console.log('fetch theo id')
      setIsLoading(false)
      dispatch(getProductCategoryByIDResult(props.id || params.CategoryId))
    } else {
      setIsLoading(false)
      console.log('fetch all')
      dispatch(getProductResult())
   }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, props.id])

  
  console.log('list',listProduct)
  return (
    <>
      <div className="product__container">
        {
          props.visible ?
            <div className="product__container--header">
              <h2>{props.title}</h2>
              <h3>{props.title}</h3>
              <span className="icon">
                <img src="//theme.hstatic.net/1000239816/1000467243/14/icon_featured.png?v=221" alt="" />
              </span>
            </div>
             : false
        }
        {
          !props.visible ? <SortCollection/> : false
        }
        {
          !isLoading ? <div className="product__container--content">
            {
              listProduct.slice(0,props.limitItem).map((product, index) => {
                return (
                  // index <= 7 ?
                    <div className="product-item" key={product.ProductId}>
                      <div className="product-img">
                        <Link to={`/product/productid=${product.ProductId}`}>
                          <img className="first-img" src={product.Img[0]} alt=""/>
                          <img className="second-img" src={product.Img[1]} alt=""/>
                        </Link>
                      </div>
                      <div className="action">
                        <div className="btn-cart-products" onClick={() => dispatch(addToCart(product,1,product?.Size[0]))}>
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                        <div className="btn-view-details">
                          <Link to="/">
                            <i className="far fa-clone"></i>
                            </Link>
                        </div>
                        <div className="btn-quickview-products">
                            <i className="fas fa-eye"></i>
                        </div>
                      </div>
                      <div className="product-detail">
                        <p className="product-name">
                          <Link to="/">
                            {product.Name}
                          </Link>
                        </p>
                        <p className="product-price">{convertMoney(product.Price)}đ</p>
                      </div>
                    </div>
                    // : false
                )
              })
            }
          </div> : <Spin tip="Loading..." style={{}}><LoadingOutlined style={{ fontSize: 30, color: '#008dff', textAlign: 'center', marginBottom: 30 }} spin /></Spin>
        }

        {
          props.visible ?
            <div className="product__container--readmore">
              <Link to="/">
                Xem thêm
              </Link>
            </div> : false
        }
      </div>
    </>
  );
};

export default Product;