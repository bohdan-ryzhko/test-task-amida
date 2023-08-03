import sass from "./Basket.module.scss";

import { FC, useEffect } from "react";
import { CloseButton } from "../CloseButton/CloseButton";
import { BasketList } from "../BasketList/BasketList";
import { useBasket } from "../../hooks";
import { AppDispatch } from "../../types";
import { useDispatch } from "react-redux";
import { calcTotal, clearBasket } from "../../redux/basketSlice";
import { toast } from "react-toastify";

interface BasketProps {
  setToggleBasket: (toggle: boolean) => void;
  toggleBasket: boolean;
}

export const Basket: FC<BasketProps> = ({ setToggleBasket, toggleBasket }) => {

  const { basket: { list, total } } = useBasket();

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(calcTotal());
  }, [dispatch]);

  const onCloseBasket = () => {
    setToggleBasket(false);
  }

  const handleSendOrder = () => {
    console.log({ list, total });
    toast.success(`Orders success send!`);
    dispatch(clearBasket());
  }

  const onClearBasket = () => {
    dispatch(clearBasket());
  }

  return (
    <>
      <div
        onClick={onCloseBasket}
        className={toggleBasket ? sass.basketBackdropActive : sass.basketBackdrop}></div>
      <div className={toggleBasket ? sass.basketBodyActive : sass.basketBody}>
        <h2 className={sass.title}>Your products</h2>
        <CloseButton onClick={onCloseBasket} />
        <BasketList />
        {
          list.length > 0 &&
          <div className={sass.basketButtons}>
            <button
              onClick={onClearBasket}
              className={sass.clearBasket}
              type="button"
            >
              Clear products
            </button>
            <button
              onClick={handleSendOrder}
              className={sass.sendOrder}
              type="button"
            >
              Send order
            </button>
          </div>
        }
      </div>
    </>
  )
}
