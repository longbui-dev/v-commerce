import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createSelector } from 'reselect'

const initialState = {
  allProducts: [],
  inforProductsNewArrivals: [],
  idProductsNewArrivals: '',
  imageProductsNewArrivals: '',
  nameProductsNewArrivals: '',
  priceProductsNewArrivals: 0,
  status: '',
  error: null,
}

export const fetchAllProducts = createAsyncThunk('products/fetchAllproducts', async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products')
    const json = await response.json()
    return json
})

const allProductsSlice = createSlice({ 
    name: 'allProducts',
    initialState,
    reducers: {
        // showProducts: (state) => {

        //     state.inforProductsNewArrivals = 'abcd'
        //     console.log('state', state.inforProductsNewArrivals)
           
        // }
    },
    extraReducers(builder) {
      builder
        .addCase(fetchAllProducts.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.allProducts = action.payload
            // console.log( state.allProducts)
            state.inforProductsNewArrivals = state.allProducts.map((product) => {
                state.idProductsNewArrivals = product.id
                state.nameProductsNewArrivals = product.category.name
                state.imageProductsNewArrivals = product.category.image
                state.priceProductsNewArrivals = product.price
                return ({
                    idProductsNewArrivals: product.id,
                    nameProductsNewArrivals: product.category.name,
                    imageProductsNewArrivals: product.category.image,
                    priceProductsNewArrivals: product.price
                })
            })
        })
        .addCase(fetchAllProducts.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        })
    }
})

export const { showProducts } = allProductsSlice.actions
export const inforProductsNewArrivals = (state) => state.allProducts.inforProductsNewArrivals;
export default allProductsSlice.reducer