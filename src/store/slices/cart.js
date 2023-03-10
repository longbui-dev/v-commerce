import { createSlice } from '@reduxjs/toolkit'

const productsInCart =
  localStorage.getItem('productsInCart') !== null
    ? JSON.parse(localStorage.getItem('productsInCart'))
    : []
const amountProductsInCart =
  localStorage.getItem('amountProductsInCart') !== null
    ? JSON.parse(localStorage.getItem('amountProductsInCart'))
    : 0

const setItem = (item, amountProductsInCart) => {
  localStorage.setItem('productsInCart', JSON.stringify(item))
  localStorage.setItem(
    'amountProductsInCart',
    JSON.stringify(amountProductsInCart),
  )
}

export const cart = createSlice({
  name: 'cart',
  initialState: {
    amountProductsInCart,
    productsInCart,
    amountDeleteMultiProducts: 0,
  },
  reducers: {
    decrementProductsInCart: (state) => {
      state.amountProductsInCart -= 1
    },

    addToCart: (state, action) => {
      state.productsInCart.push(action.payload)
      state.amountProductsInCart += 1

      setItem(
        state.productsInCart.map((item) => item),
        state.amountProductsInCart,
      )
    },

    removeInCarts: (state, action) => {
      state.productsInCart = state.productsInCart.filter(
        (item) => item.id !== action.payload.id,
      )
      state.amountProductsInCart -= action.payload.amount

      setItem(
        state.productsInCart.map((item) => item),
        state.amountProductsInCart,
      )
    },

    removeSelectedItems: (state, action) => {
      state.productsInCart = state.productsInCart.filter(
        (item) => !action.payload.removedItems.includes(item.id),
      )
      state.amountDeleteMultiProducts = action.payload.amount
        .filter((item) => {
          return !state.productsInCart.find((i) => i.id === item.id)
        })
        .reduce((acc, item) => acc + item.amount, 0)

      state.amountProductsInCart -= state.amountDeleteMultiProducts

      setItem(
        state.productsInCart.map((item) => item),
        state.amountProductsInCart,
      )
    },
  },
})

export const {
  incrementProductsInCart,
  decrementProductsInCart,
  addToCart,
  removeInCarts,
  removeSelectedItems,
  resetCart,
} = cart.actions
export const selectAmountProductsInCart = (state) =>
  state.carts?.amountProductsInCart
export const selectProductsInCart = (state) => state.carts?.productsInCart
export default cart.reducer
