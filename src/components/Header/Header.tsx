import sass from "./Header.module.scss";

import { Container } from "../Container/Container";
import { FC } from "react";
import { SlBasket } from 'react-icons/sl';
import { useBasket } from "../../hooks";

interface HeaderProps {
  setToggleBasket: (toogle: boolean) => void;
}

export const Header: FC<HeaderProps> = ({ setToggleBasket }) => {

  const { basket } = useBasket();

  return (
    <header className={sass.header}>
      <Container>
        <div className={sass.headerInner}>
          <h1 className={sass.title}>Test task by Bohdan Ryzhko</h1>
          <button
            onClick={() => setToggleBasket(true)}
            className={sass.basketBtn}
            type="button"
          >
            <span>{basket.list.length}</span>
            <SlBasket size={30} color="#fff" />
          </button>
        </div>
      </Container>
    </header>
  )
}
