import { createSlice } from '@reduxjs/toolkit'

export const amountProductsInCart = createSlice({
  name: 'counter',
  initialState: {
    amount: 0,
    productsInCart: [],
  },
  reducers: {
    increment: state => {
      state.amount += 1
    },
    
    decrement: state => {
      state.amount -= 1
    },

    addCart: (state, action) => {
     state.productsInCart.push(action.payload)
    }
  }
})

export const { increment, decrement,addCart } = amountProductsInCart.actions
export const selectCount = (state) => state.counter.amount
export const productsInCart = (state) => state.counter.productsInCart
export default amountProductsInCart.reducer