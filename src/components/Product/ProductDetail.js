import React, { useState, useEffect } from 'react';
import './productDetail.scss'
import {
  useParams
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductByIDResult } from '../../redux/actions/product'
import { addToCart } from '../../redux/actions/cart'

const ProductDetail = () => {
  const productByID = useSelector(state => state.product.productByID)
  const params = useParams()
  const dispatch = useDispatch()
  const [active, setActive] = useState('')
  const [isImageMain, setImageMain] = useState()

  const [amount, setAmount] = useState(1)
  const [size, setSize] = useState(27)
  // console.log('imageMain-----',productByID?.Img[0])

  const handleAddToCart = (e) => {
    console.log('test size form',size)
    console.log('test amount form',)
    dispatch(addToCart(productByID,parseInt(amount),parseInt(size)))
    e.preventDefault()
  }
  
  const chooseImage = (e) => {
    setImageMain(e.target.getAttribute('src'))

    console.log('key',e.target.getAttribute('key'))
    console.log('src2',productByID.Img[0])
    setActive(e.target.getAttribute('src'))
  }

  const convertMoney = (money) => {
    const lengthNumber = money?.toString().length

    const stringNumber = money?.toString()
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

  console.log('param product id', params)
  console.log('san pham theo id', productByID)
  useEffect(() => {
    dispatch(getProductByIDResult(params.ProductId))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  useEffect(() => {
    setImageMain(productByID.Img ? productByID.Img[0] : '')
    setActive(productByID.Img ? productByID.Img[0] : '')
  },[productByID.Img])


  return (
    <div className="product-item-detail">
      <div className="wrapper">
        <div className="product-image">
          <img className="image-zoom" src={isImageMain} alt="" />
          <div className="product-slider">
            <ul>
              {
                productByID.Img?.map((image, index) => {
                  return (
                    index < 2 ?
                    <li className={active === `${image}` ? "active" : ""} key={index}>
                      <img src={image} alt="" onClick={(e) => chooseImage(e)}/>
                    </li>
                    : false
                  )
                })
              }
            </ul>
          </div>
        </div>

        <div className="product-content">
          <div className="product-content--title">
            {productByID.Name}
          </div>
          <div className="product-content--price">
            {convertMoney(productByID.Price)}đ
          </div>

          <form action="" onSubmit={(e) => handleAddToCart(e)}>
            <label htmlFor="size">Kích thước</label>
            <select name="size" id="size" onChange={(e)=> setSize(e.target.value)} defaultValue={size}>
              {
                productByID.Size?.map((size,index) => {
                  return (
                    <option value={size} key={index}>{size}</option>
                  )
                })
              }
            </select>
            <label htmlFor="amount">Số lượng</label>
            <input type="number" min="1" max={productByID.Amount} onChange={(e)=> setAmount(e.target.value)} defaultValue={amount}/>
            <div className="button-action">
              <button className="add-to-cart">
                <i className="fas fa-shopping-cart"></i>
                <span>thêm vào giỏ</span>
              </button>
              <button className="buy-now">
                <i className="fas fa-check"></i>
                <span>mua ngay</span>
              </button>
            </div>
          </form>
        </div>

      </div>
      <div className="product-description">
        <div className="product-description--title">
          mô tả sản phẩm
        </div>
        <div className="product-description--content">
          <p>{productByID.Name}</p>
          {
            productByID.Img?.map((item, index)=> {
              return(
                <p className="image-item" key={index}>
                <img src={item} alt="" />
              </p>
              )
            })
          }

        </div>
      </div>
    </div>

  );
};

export default ProductDetail;