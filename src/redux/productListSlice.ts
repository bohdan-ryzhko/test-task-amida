import { createSlice } from "@reduxjs/toolkit";
import { getProductList } from "./operations";
import { IProduct } from "../interfaces";

export interface InitialStateProductList {
  list: IProduct[],
  isLoad: boolean,
  error: null | any,
}

const initialState: InitialStateProductList = {
  list: [],
  isLoad: false,
  error: null,
}

const productListSlice = createSlice({
  name: "product-list",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProductList.pending, (state) => {
        state.isLoad = true;
      })
      .addCase(getProductList.fulfilled, (state, action) => {
        state.isLoad = false;
        state.error = null;
        state.list = action.payload;
      })
      .addCase(getProductList.rejected, (state, action) => {
        state.isLoad = false;
        state.error = action.payload;
      })
  }
});

export const productListReducer = productListSlice.reducer;