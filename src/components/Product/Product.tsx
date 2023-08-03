import sass from "./Product.module.scss";

import { FC } from "react";
import { IProduct } from "../../interfaces";
import { AppDispatch } from "../../types";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/basketSlice";

interface ProductProps {
  product: IProduct;
}

export const Product: FC<ProductProps> = ({ product: { image, price, title, id } }) => {

  const dispatch: AppDispatch = useDispatch();

  const onAddProduct = () => {
    dispatch(addProduct({ image, price, title, id }))
  }

  return (
    <>
      <div className={sass.productImage}>
        <img height={350} src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{price} UAH</p>
      <button
        onClick={onAddProduct}
        type="button"
      >
        Add to basket
      </button>
    </>
  )
};
