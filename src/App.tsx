import { FC } from 'react';
import { ProductList } from './components/ProductList/ProductList';
import { Container } from './components/Container/Container';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

const App: FC = () => {
  return (
    <>
      <Header />
      <Main>
        <ProductList />
      </Main>
    </>
  );
}

export default App;
