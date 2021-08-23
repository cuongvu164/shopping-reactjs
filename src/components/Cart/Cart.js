import React,{ useState, useEffect, useMemo,useCallback } from 'react';
import './cart.scss'
import { useSelector,useDispatch } from 'react-redux';
import {addToCart} from '../../redux/actions/cart'

const Cart = () => {
  const [isQuantity, setIsQuantity] = useState(1)
  const [isPrice, setIsPrice] = useState()
  const listItemCart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  console.log('item cart----', listItemCart)
  console.log('isQuantity',isQuantity)

  // const setPrice = useMemo((price, quantity) => setIsPrice(price?.Price * quantity),[])

  // const setPriceCallBack = useCallback((price, quantity)=> setIsPrice(price.Price * quantity),[])

  const updateCart = () =>{
    dispatch(addToCart(listItemCart,isQuantity,isPrice))
  }

  useEffect(() => {
    // setIsPrice(item.listProduct.Price * isQuantity)
  },[])

  return (
    <div className="cart">
      <div className="cart-content">
        <span className="cart-header">
          giỏ hàng
        </span>
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
                        <input type="number" min="1" max="40" defaultValue={item.quantity || isQuantity} onChange={(e) => setIsQuantity(e.target.value)}/>
                      </td>
                      <td className="price">{parseInt(item.Price) * parseInt(isQuantity)}đ</td>
                      <td className="remove">
                        <i className="fas fa-times"></i>
                      </td>
                    </tr>
                  )
                })
              }


              <tr className="summary">
                <td></td>
                <td></td>
                <td>Tổng cộng:</td>
                <td>460.000đ</td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <div className="button-action">
            <button className="update-cart" onClick={() => updateCart()}>
              cập nhật
            </button>
            <button className="checkout">
              thanh toán
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cart;