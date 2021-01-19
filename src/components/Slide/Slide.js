import React from 'react';
import { Carousel } from 'antd'
import 'antd/dist/antd.css'
import { Link, BrowserRouter as Router } from 'react-router-dom'

const Slide = () => {
  return (
    <Router>
      <Carousel autoplay effect="fade">
    <div>
      <Link to="/">
        <img src="https://theme.hstatic.net/1000239816/1000467243/14/slideshow_2.jpg?v=202" />
      </Link>
    </div>
    <div>
      <Link to="/">
        <img src="https://theme.hstatic.net/1000239816/1000467243/14/slideshow_3.jpg?v=204" />
      </Link>
    </div>
    <div>
      <Link to="/">
        <img src="https://theme.hstatic.net/1000239816/1000467243/14/slideshow_1.jpg?v=204" />
      </Link>
    </div>
    <div>
      <Link to="/">
        <img src="https://theme.hstatic.net/1000239816/1000467243/14/slideshow_4.jpg?v=204" />
      </Link>
    </div>
  </Carousel>
    </Router>
  );
};

export default Slide;