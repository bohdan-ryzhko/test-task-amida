import { FC } from 'react';
import { ProductList } from './components/ProductList/ProductList';
import { Container } from './components/Container/Container';

const App: FC = () => {
  return (
    <>
      <Container>
        <ProductList />
      </Container>
    </>
  );
}

export default App;
