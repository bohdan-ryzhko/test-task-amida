import { useSelector } from "react-redux";
import { selectProductList } from "../redux/selectors";

export const useProductList = () => ({
  productList: useSelector(selectProductList),
});
