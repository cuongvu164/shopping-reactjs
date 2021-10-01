import { lazy } from 'react'
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ProductPage = lazy(() => import('./pages/ProductPage/ProductPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductPage/ProductDetailPage'));
const CartPage = lazy(() => import('./pages/CartPage/CartPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage/CheckoutPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));

export const routers = [
  { path: '/', exact: true, Component: HomePage },
  { path: `/product/categoryid=:CategoryId`, exact: true, Component: ProductPage },
  { path: '/product', exact: true, Component: ProductPage },
  { path: '/product/productid=:ProductId', exact: true, Component: ProductDetailPage },
  { path: '/cart', exact: true, Component: CartPage },
  { path: '/register', exact: true, Component: SignUpPage },
  { path: '/login', exact: true, Component: SignInPage },
  { path: '/checkout', exact: true, Component: CheckoutPage },
]