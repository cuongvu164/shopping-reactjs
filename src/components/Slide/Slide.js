import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {EffectFade,Autoplay, Navigation,Pagination} from 'swiper'
import 'swiper/swiper-bundle.css'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import './slide.scss'

const slider = [
  {
    path: '/',
    img: 'https://theme.hstatic.net/1000239816/1000467243/14/slideshow_2.jpg?v=202'
  },
  {
    path: '/',
    img: 'https://theme.hstatic.net/1000239816/1000467243/14/slideshow_3.jpg?v=204'
  },
  {
    path: '/',
    img: 'https://theme.hstatic.net/1000239816/1000467243/14/slideshow_1.jpg?v=204'
  },
  {
    path: '/',
    img: 'https://theme.hstatic.net/1000239816/1000467243/14/slideshow_4.jpg?v=204'
  },
]
SwiperCore.use([Navigation,Pagination,EffectFade,Autoplay])

const Slide = () => {
  return (
    <Router>
        <Swiper
          effect="fade"
          wrapperTag="ul"
          id="main"
          tag="section"
          navigation
          pagination
          loop
          autoplay={{delay:2500,disableOnInteraction: false}}
        >
        {
          slider.map((item,index) => {
            return (
              <SwiperSlide tag="li" key={index}>
                <Link to={item.path}>
                  <img src={item.img} alt="" />
                </Link>
              </SwiperSlide>
            )
          })
        }
        </Swiper>
    </Router>
  );
};

export default Slide;