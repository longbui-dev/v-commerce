import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  status: "",
  error: null,
  advertisementProducts: [],
  idAdvertisementProducts: "",
  imageAdvertisementProducts: "",
  titleAdvertisementProducts: "",
  describeAdvertisementProducts: "",
  priceAdvertisementBigProducts: 0,
};

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllproducts",
  async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const json = await response.json();
    return json;
  }
);

const allProductsSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allProducts = action.payload;
        state.advertisementProducts = action.payload;

        state.advertisementProducts = state.advertisementProducts
          .slice(0, 3)
          .map((product) => {
            state.idAdvertisementProducts = product.id;
            state.titleAdvertisementProducts = product.title;
            state.imageAdvertisementProducts = product.category.image;
            state.describeAdvertisementProducts = product.description;
            state.priceAdvertisementBigProducts = product.price;
            return {
              idAdvertisementProducts: product.id,
              titleAdvertisementProducts: product.title,
              imageAdvertisementProducts: product.category.image,
              describeAdvertisementProducts: product.description,
              priceAdvertisementBigProducts: product.price,
            };
          });
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { showProducts } = allProductsSlice.actions;
export const advertisementProducts = (state) =>
  state.allProducts?.advertisementProducts;
export const inforProductsNewArrivals = (state) =>
  state.allProducts?.inforProductsNewArrivals;
export default allProductsSlice.reducer;
