import sass from "./Basket.module.scss";

import { FC } from "react";
import { CloseButton } from "../CloseButton/CloseButton";
import { BasketList } from "../BasketList/BasketList";

interface BasketProps {
  setToggleBasket: (toggle: boolean) => void;
  toggleBasket: boolean;
}

export const Basket: FC<BasketProps> = ({ setToggleBasket, toggleBasket }) => {

  const onCloseBasket = () => {
    setToggleBasket(false)
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
      </div>
    </>
  )
}
