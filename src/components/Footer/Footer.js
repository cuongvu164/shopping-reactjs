import React from 'react';
import '../../font awesome/css/fontawesome.css'
import './footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container--item">
          <h3>giới thiệu</h3>
          <p>ENDA Kisuhi – dựa trên tinh thần đơn giản, phóng khoáng, hiện đại chứa đựng sự cổ điển đầy tinh tế. Slogan "Kisuhi – Cùng bạn bước đi" Thể hiện Kisuhi luôn mong muốn các sản phẩm của Kisuhi sẽ luôn cùng bạn bước đi mọi nơi, để cùng thấy cuộc sống tươi đẹp hơn. Cùng với triết lý kinh doanh: Kisuhi đề cao giá trị của sự trung thực, Kisuhi kinh doanh bằng sự tử tế nên Kisuhi luôn cố gắng để mang đến giá trị tốt nhất, mang đến sự hài lòng cho khách hàng.</p>
          <ul>
            <li>
              <i class="fas fa-home"></i>
              <span>948 Quang Trung, P. 8, Gò Vấp, HCM.</span>
            </li>
            <li>
              <i class="fas fa-envelope"></i>
              <span>cuongmk288@gmail.com</span>
            </li>
            <li>
              <i class="fas fa-phone-alt"></i>
              <span>0789.376.769</span>
            </li>
            <li>
              <i class="fas fa-fax"></i>
              <span>GPKD số 41M8035461</span>
            </li>
          </ul>
        </div>
        <div className="footer__container--item">
          <h3>liên kết</h3>
          <ul>
            <li>Trang chủ</li>
            <li>Tất cả sản phẩm</li>
            <li>Hướng dẫn</li>
            <li>Chính sách đổi trả</li>
            <li>Chính sách vận chuyển</li>
            <li>Chính sách thanh toán</li>
            <li>Chính sách bảo mật</li>
            <li>Tìm kiếm</li>
            <li>Giới thiệu</li>
          </ul>
        </div>
        <div className="footer__container--item">
        <h3>kết nối với chúng tôi</h3>
          <ul>
            <li>
              <i class="fab fa-facebook-f"></i>
            </li>
            <li>
              <i class="fab fa-google-plus-g"></i>
            </li>
            <li>
              <i class="fab fa-youtube"></i>
            </li>
            <li>
              <i class="fab fa-instagram"></i>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Footer;