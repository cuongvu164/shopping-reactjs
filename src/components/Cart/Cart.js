import React, { useState, useEffect, useMemo, useCallback } from 'react';
import './cart.scss'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart,updateToCart, deleteToCart } from '../../redux/actions/cart'

const Cart = () => {
  const [isPrice, setIsPrice] = useState()

  const listItemCart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  console.log('item cart----', listItemCart)

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

  // const setPrice = useMemo((price, quantity) => setIsPrice(price?.Price * quantity),[])

  // const setPriceCallBack = useCallback((price, quantity)=> setIsPrice(price.Price * quantity),[])

  const updateCart = () => {
    // dispatch(addToCart(listItemCart,isQuantity,isPrice))
  }


  return (
    <div className="cart">
      <div className="cart-content">
        <span className="cart-header">
          giỏ hàng
        </span>
        {
          listItemCart.length > 0 ?
            <form action="" className="cart-form">
              <table>
                <thead>
                  <tr>
                    <td className="image"></td>
                    <td className="item">Tên sản phẩm</td>
                    <td className="quantity">Số lượng</td>
                    <td className="price">Giá tiền</td>
                    <td className="remove"></td>
                  </tr>
                </thead>
                <tbody>
                  {
                    listItemCart.map((item, index) => {
                      return (
                        <tr className="list-product" key={index}>
                          <td className="image">
                            <img src={item.listProduct.Img[0]} alt="" />
                          </td>
                          <td className="item">
                            <strong>{item.listProduct.Name}</strong>
                            <span className="information">Size: {item.size}</span>
                          </td>
                          <td className="quantity">
                            <input type="number"
                              min="1"
                              max="40"
                              defaultValue={item.quantity}
                              onChange={(e) => dispatch(updateToCart(item.listProduct, parseInt(e.target.value), item.size))} />
                          </td>
                          <td className="price">{convertMoney(item.listProduct.Price * item.quantity)}đ</td>
                          <td className="remove">
                            <i className="fas fa-times" onClick={() => dispatch(deleteToCart(item.listProduct, item.size))}></i>
                          </td>
                        </tr>
                      )
                    })
                  }

                  <tr className="summary">
                    <td></td>
                    <td></td>
                    <td>Tổng cộng:</td>
                    <td>{isPrice}đ</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>

              <div className="button-action">
                <button className="keep-buying">
                  tiếp tục mua hàng
                </button>
                <button className="checkout">
                  thanh toán
                </button>
              </div>
            </form> :
            <p className="content-empty">Không có sản phẩm nào trong giỏ hàng!</p>
        }
      </div>
    </div>
  );
};

export default Cart;