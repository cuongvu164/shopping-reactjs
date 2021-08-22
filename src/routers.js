import HomePage from './pages/HomePage/HomePage'
import ProductPage from './pages/ProductPage/ProductPage'
import ProductDetailPage from './pages/ProductPage/ProductDetailPage'
import CartPage from './pages/CartPage/CartPage'

export const routers = [
  {path: '/', exact: true, Component: HomePage},
  {path: `/product/categoryid=:CategoryId`, exact: true, Component: ProductPage},
  {path: '/product', exact: true, Component: ProductPage},
  {path: '/product/productid=:ProductId', exact: true, Component: ProductDetailPage},
  {path: '/cart', exact: true, Component: CartPage},
]