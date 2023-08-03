import sass from "./BasketList.module.scss";

import { useBasket } from "../../hooks";
import { FC } from "react";

import { FaTrash } from 'react-icons/fa';
import { AppDispatch } from "../../types";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../redux/basketSlice";

export const BasketList: FC = () => {
  const { basket } = useBasket();

  const dispatch: AppDispatch = useDispatch();

  const onRemoveProduct = (id: string) => () => {
    dispatch(removeProduct(id));
  }

  return (
    <>
      <ul className={sass.basketList}>
        {
          basket.list.map(({ image, price, title, id }) => (
            <li
              key={id}
              className={sass.basketProduct}
            >
              <div className={sass.basketImage}>
                <img width={50} height={50} src={image} alt={title} />
              </div>
              <div className={sass.basketInfo}>
                <div>
                  <p>{title}</p>
                  <p>{price} UAH</p>
                </div>
                <button
                  onClick={onRemoveProduct(id)}
                  type="button"
                >
                  <FaTrash size={20} color="#003580" />
                </button>
              </div>
            </li>
          ))
        }
      </ul>
      <p className={sass.total}>Total: {basket.total} UAH</p>
    </>
  )
}
