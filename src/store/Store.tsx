import { configureStore } from '@reduxjs/toolkit'
import amountProductsInCart from './slices/cart'
import allProductsSlice from './slices/allProducts'

export default configureStore({
  devTools: true,
  reducer: {
    carts: amountProductsInCart,
    allProducts: allProductsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})
