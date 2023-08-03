import sass from "./Basket.module.scss";

import { FC } from "react";

export const Basket: FC = () => {
  return (
    <>
      <div className={sass.backdrop}></div>
      <div className={sass.basketBody}>
        <ul className={sass.basketList}>
          
        </ul>
      </div>
    </>
  )
}