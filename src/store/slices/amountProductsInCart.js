import { createSlice } from "@reduxjs/toolkit";

export const amountProductsInCart = createSlice({
  name: "counter",
  initialState: {
    amountProductsInCart: 0,
    productsInCart: [],
    totalPrice: 0,
    amountChoosedProducts: 0,
  },
  reducers: {
    decrementProductsInCart: (state) => {
      state.amountProductsInCart -= 1;
    },

    addToCart: (state, action) => {
      state.productsInCart.push(action.payload);
      state.amountProductsInCart += 1;
      state.totalPrice += action.payload.price;
      state.amountChoosedProducts += 1;
    },
  },
});

export const { incrementProductsInCart, decrement, addToCart } =
  amountProductsInCart.actions;
export const selectCount = (state) => state.counter?.amountProductsInCart;
export const selectProductsInCart = (state) => state.counter?.productsInCart;
export const selectTotalPrice = (state) => state.counter?.totalPrice;
export const selectAmountChoosedProducts = (state) =>
  state.counter?.amountChoosedProducts;
export default amountProductsInCart.reducer;
