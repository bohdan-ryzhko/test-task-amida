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

const calcTotalPrice = (acc: number, product: IProduct) => acc += product.price;

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.list.push(action.payload);
      state.total = state.list.reduce(calcTotalPrice, 0);
    },
    removeProduct(state, action) {
      const removedIndex = state.list.findIndex(product => product.id === action.payload);
      state.list.splice(removedIndex, 1);
      state.total = state.list.reduce(calcTotalPrice, 0);
    },
    clearBasket(state) {
      state.list = [];
      state.total = 0;
    },
    calcTotal(state) {
      state.total = state.list.reduce(calcTotalPrice, 0);
    }
  },
});

export const { addProduct, removeProduct, calcTotal, clearBasket } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
