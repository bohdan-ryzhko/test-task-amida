import sass from "./Product.module.scss";

import { FC } from "react";
import { IProduct } from "../../interfaces";
import { AppDispatch } from "../../types";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/basketSlice";
import { useBasket } from "../../hooks";
import { toast } from "react-toastify";

interface ProductProps {
  product: IProduct;
}

export const Product: FC<ProductProps> = ({ product: { image, price, title, id } }) => {

  const dispatch: AppDispatch = useDispatch();

  const { basket } = useBasket();

  const handleAddProduct = () => {
    const repeateProduct = basket.list.find(product => product.id === id);

    if (repeateProduct !== undefined) {
      toast.warn(`${title} in your products`);
      return;
    }

    dispatch(addProduct({ image, price, title, id }));
    toast.success(`Product ${title} add success!`);
  }

  return (
    <>
      <div className={sass.productImage}>
        <img height={350} src={image} alt={title} />
      </div>
      <div className={sass.productDescription}>
        <h3>{title}</h3>
        <p>{price} UAH</p>
      </div>
      <button
        className={sass.addProduct}
        onClick={handleAddProduct}
        type="button"
      >
        Add to basket
      </button>
    </>
  )
};
