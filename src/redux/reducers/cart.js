import { ADD_TO_CART, UPDATE_TO_CART, DELETE_TO_CART } from '../actionTypes'

const cart = JSON.parse(localStorage.getItem('cart'));

const initialState = cart ? cart : []

const findIndex = (cart, product, size) => {
  console.log('sizeasasdasd', cart)
  var index = -1
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      console.log('cart[i].listProduct.Size-----', cart.length)

      if (cart[i].listProduct.ProductId === product.ProductId && cart[i].size === size) {
        console.log('index trong function', index)
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
      console.log('action add_to cart-----', state)
      console.log('action add_to cart2-----', listProduct)

      var index = findIndex(state, listProduct, size)
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

    case UPDATE_TO_CART:
      // console.log('action add_to cart update-----', state)
      // console.log('action add_to cart update2-----', size)
      // console.log('action add_to cart update3-----', listProduct)

      index = findIndex(state, listProduct, size)
      console.log('index updateToCart', index)

      state[index].quantity = action.quantity
      // console.log('state[index].quantity = quantity', quantity)
      if (quantity <= 0) {
        state.splice(index, 1)
      }
      localStorage.setItem('cart', JSON.stringify(state))
      return [...state]

    case DELETE_TO_CART:
      console.log('action delete_to cart update-----', state)
      console.log('action delete_to cart update2-----', size)
      console.log('action delete_to cart update3-----', listProduct)

      index = findIndex(state, listProduct, size)
      console.log('index deleteToCart', index)
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem('cart', JSON.stringify(state))
      return [...state]


    default: return state
  }
}

export default cartReducer