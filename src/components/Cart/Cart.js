import React from 'react';
import './cart.scss'

const Cart = () => {
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
              <tr className="list-product">
                <td className="image">
                  <img src="https://file.hstatic.net/1000239816/file/a1697-enda-kisuhi-ao-linen-theu-nghe-thuat-hoa-ho-diep_7c6fea16c8bd4e0db83eb994076508aa_grande.jpg" alt="" />
                </td>
                <td className="item">
                  <strong>A1696- Áo Sơ Mi Tay Ngắn Lai Bầu</strong>
                  <span className="information">Size: 27</span>
                </td>
                <td className="quantity">
                  <input type="number" min="1" max="40" defaultValue="1"/>
                </td>
                <td className="price">2.300.000đ</td>
                <td className="remove">
                  <i class="fas fa-times"></i>
                </td>
              </tr>

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
            <button className="update-cart">
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