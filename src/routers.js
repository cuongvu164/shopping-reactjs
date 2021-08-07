import HomePage from './pages/HomePage/HomePage'
import ProductPage from './pages/ProductPage/ProductPage'

export const routers = [
  {path: '/', exact: true, Component: HomePage},
  {path: '/product/:CategoryId', exact: true, Component: ProductPage},
  {path: '/product', exact: true, Component: ProductPage},
]