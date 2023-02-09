import { configureStore } from '@reduxjs/toolkit'
import amountProductsInCart from './slices/countAmountProductsInCart'
import allProductsSlice from './slices/allProducts'

export default configureStore({
  devTools: true,
  reducer: {
    counter: amountProductsInCart,
    allProducts: allProductsSlice
  }
})
