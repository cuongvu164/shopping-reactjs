// import Components from './components'
import React, { Suspense } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './font awesome/css/all.min.css'
import { routers } from './routers'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
function App() {
  return (
    <Suspense fallback={<Spin tip="Loading..." indicator={<LoadingOutlined style={{ fontSize: 130, color: '#008dff', textAlign: 'center', marginTop: 30 }} spin />}></Spin>}>
      <Router>
        <ScrollToTop />
        <Header />
        <Navbar />
        <Switch>
          {
            routers.map((item, index) => {
              const { Component } = item;
              return (
                <Route path={item.path} exact={item.exact} key={index}>
                  <Component />
                </Route>
              )
            })
          }
        </Switch>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
