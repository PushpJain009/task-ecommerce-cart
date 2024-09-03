import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default productSlice.reducer;
