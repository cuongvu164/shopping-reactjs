import { ADD_TO_CART } from '../actionTypes'

const cart = JSON.parse(localStorage.getItem('cart'));

const initialState = cart ? cart : []

const findIndex = (cart, product) => {
  let index = -1
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].listProduct.ProductId === product.ProductId && cart[i].listProduct.Size === product.size) {
        index = i
        break
      }
    }
  } else {
    index = -1
  }
  return index
}

const cartReducer = (state = initialState, action) => {
  const { listProduct, quantity, size } = action
  console.log('action cart', action)
  switch (action.type) {
    case ADD_TO_CART:
      console.log('action add_to cart-----', action.listProduct)

      let index = findIndex(state, listProduct)
      console.log('index add to cart-----', index)

      if (index !== -1) {
        state[index].quantity += action.quantity
      } else {
        state.push({
          listProduct,
          quantity,
          size
        })
      }
      localStorage.setItem('cart', JSON.stringify(state))
      return [...state]
    default: return state
  }
}

export default cartReducer