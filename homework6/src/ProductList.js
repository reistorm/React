import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, toggleAvailability } from './store';

const ProductList = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeProduct(id));
  };

  const handleToggleAvailability = (id) => {
    dispatch(toggleAvailability(id));
  };

  return (
    <div>
      <h2>Список продуктов</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Цена: ${product.price}</p>
            <p>Доступен: {product.available ? 'Yes' : 'No'}</p>
            <button onClick={() => handleToggleAvailability(product.id)}>Доступен</button>
            <button onClick={() => handleDelete(product.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;