import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/countAmountProductsInCart'
import allProductsSlice from './slices/allProducts'

export default configureStore({
  devTools: true,
  reducer: {
    counter: counterReducer,
    allProducts: allProductsSlice
  }
})
