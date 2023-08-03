import { FC, useEffect, useState } from 'react';

import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { ProductList } from './components/ProductList/ProductList';
import { Basket } from './components/Basket/Basket';

import { addNoScroll, removeNoScroll } from './utils';

import { Slide, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Footer } from './components/Footer/Footer';

const App: FC = () => {
  const [toggleBasket, setToggleBasket] = useState<boolean>(false);

  useEffect(() => {
    if (toggleBasket) {
      addNoScroll();
    } else {
      removeNoScroll();
    }

    return () => {
      removeNoScroll();
    }
  }, [toggleBasket]);

  return (
    <>
      <Header
        setToggleBasket={setToggleBasket}
      />
      <Main>
        <ProductList />
        <Basket
          setToggleBasket={setToggleBasket}
          toggleBasket={toggleBasket}
        />
      </Main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
    </>
  );
}

export default App;
