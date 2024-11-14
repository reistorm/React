import React from 'react';
import AddProduct from './AddProduct';
import ProductList from './ProductList';

const App = () => {
  return (
    <div>
      <h1>Каталог продуктов</h1>
      <AddProduct />
      <ProductList />
    </div>
  );
};

export default App;