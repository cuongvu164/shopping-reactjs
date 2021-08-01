import React, { useState, useEffect } from 'react';
import {
  Link,
  BrowserRouter as Router
} from 'react-router-dom'
import './product.scss'
import '../../font awesome/css/all.min.css'
import axios from 'axios'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


const Product = (props) => {
  const [isloading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])

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

  const fecthProduct = async () => {
    await axios.get(`https://61001eefbca46600171cf75d.mockapi.io/api/Product?CategoryId=${props.id}`)
      .then(response => {
        setProducts(response.data)
        setIsLoading(false)
        console.log(response.data)
      })
  }

  useEffect(() => {
    fecthProduct()
  }, [])

  return (
    <>
      <div className="product__container">
        <div className="product__container--header">
          <h2>{props.title}</h2>
          <h3>{props.title}</h3>
          <span className="icon">
            <img src="//theme.hstatic.net/1000239816/1000467243/14/icon_featured.png?v=221" />
          </span>
        </div>
        {
          !isloading ? <div className="product__container--content">
            {
              products.map((product, index) => {
                return (
                  index <= 7 ?
                    <div className="product-item" key={product.ProductId}>
                      <div className="product-img">
                        <Link to="/">
                          <img className="first-img" src={product.Img[0]} />
                          <img className="second-img" src={product.Img[1]} />
                        </Link>
                      </div>
                      <div className="action">
                        <div className="btn-cart-products">
                          <Link to="/">
                            <i className="fas fa-shopping-cart"></i>
                          </Link>
                        </div>
                        <div className="btn-view-details">
                          <Link to="/">
                            <i className="far fa-clone"></i>
                          </Link>
                        </div>
                        <div className="btn-quickview-products">
                          <Link to="/">
                            <i className="fas fa-eye"></i>
                          </Link>
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
                    : false
                )
              })
            }
          </div> : <Spin tip="Loading..." style={{}}><LoadingOutlined style={{ fontSize: 30, color: '#008dff',textAlign: 'center', marginBottom: 30}} spin /></Spin>
        }


        <div className="product__container--readmore">
          <Link to="/">
            Xem thêm
          </Link>
        </div>
      </div>
    </>
  );
};

export default Product;