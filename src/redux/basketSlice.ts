import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../interfaces";

export interface InitialStateBasket {
  list: IProduct[];
  total: number;
}

const initialState: InitialStateBasket = {
  list: [],
  total: 0,
}

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.list.push(action.payload);
    },
    removeProduct(state, action) {
      const removedIndex = state.list.findIndex(product => product.id === action.payload);
      state.list.splice(removedIndex, 1);
    }
  },
});

export const { addProduct, removeProduct } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
