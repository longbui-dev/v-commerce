import { createSlice } from "@reduxjs/toolkit";

export const amountProductsInCart = createSlice({
  name: "counter",
  initialState: {
    amount: 0,
    productsInCart: [],
    amountProductsDuplicated: 1,
    totalPrice: 0,
    isDuplicated: false,
  },
  reducers: {
    increment: (state) => {
      state.amount += 1;
    },

    decrement: (state) => {
      state.amount -= 1;
    },

    addCart: (state, action) => {
      console.log("action.payload", action.payload);
      state.productsInCart.push(action.payload);
      console.log("state", state.productsInCart);
      //  state.productsInCart.map(product => return product)
      state.totalPrice += action.payload.price;
    },
  },
});

export const { increment, decrement, addCart } = amountProductsInCart.actions;
export const selectCount = (state) => state.counter.amount;
export const selectProductsInCart = (state) => state.counter.productsInCart;
export const selectTotalPrice = (state) => state.counter.totalPrice;
export const selectAmountProductsDuplicated = (state) => state.counter.amountProductsDuplicated;
export default amountProductsInCart.reducer;
