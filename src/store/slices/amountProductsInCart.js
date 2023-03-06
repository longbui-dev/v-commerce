import { createSlice } from "@reduxjs/toolkit";

export const amountProductsInCart = createSlice({
  name: "amountProductsInCart",
  initialState: {
    amountProductsInCart: 0,
    productsInCart: [],
    totalPrice: 0,
  },
  reducers: {
    decrementProductsInCart: (state) => {
      state.amountProductsInCart -= 1;
    },

    addToCart: (state, action) => {
      state.productsInCart.push(action.payload);
      state.amountProductsInCart += 1;
      state.totalPrice += action.payload.price;
    },

    removeInCarts: (state, action) => {
      state.productsInCart = state.productsInCart.filter(item => item.id !== action.payload.id);
      state.amountProductsInCart -= action.payload.amount
    }
  },
});

export const { incrementProductsInCart, decrement, addToCart, removeInCarts } =
  amountProductsInCart.actions;
export const selectAmountProductsInCart = (state) => state.carts?.amountProductsInCart;
export const selectProductsInCart = (state) => state.carts?.productsInCart;
export const selectTotalPrice = (state) => state.carts?.totalPrice;
export default amountProductsInCart.reducer;
