import { InitialStateBasket } from "./basketSlice";
import { InitialStateProductList } from "./productListSlice";

interface State {
  basket: InitialStateBasket;
  productList: InitialStateProductList;
}

export const selectBasket = (state: State) => state.basket;
export const selectProductList = (state: State) => state.productList;
