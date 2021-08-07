// import Components from './components'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {routers} from './routers'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  return (
    <Router>
    <ScrollToTop/>
      <Header/>
      <Navbar/>
      <Switch>
        {
          routers.map((item, index) => {
            const {Component} = item;
            return(
              <Route path={item.path} exact={item.exact} key={index}>
                <Component/>
              </Route>
            )
          })
        }
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
