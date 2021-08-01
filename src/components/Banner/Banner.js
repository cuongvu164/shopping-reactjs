import React from 'react';
import './banner.scss'
const Banner = () => {
  const stringImage = 'https://theme.hstatic.net/1000239816/1000467243/14/banner-top.jpg?v=230'
  return (
    <div className="banner" style={{backgroundImage:"url("+stringImage+")"}}>
      <span>miễn phí ship toàn quốc</span>
    </div>
  );
};

export default Banner;