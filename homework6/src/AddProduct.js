import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './store';

const AddProduct = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    available: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({...prev, [name]: name === 'available' ? e.target.checked : value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({ ...product, id: Date.now() })); // Используем timestamp как уникальный id
    setProduct({ id: '', name: '', description: '', price: '', available: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Продукт" value={product.name} onChange={handleChange} required />
      <input type="text" name="description" placeholder="Описание" value={product.description} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Цена" value={product.price} onChange={handleChange} required />
      <label>
        Available:
        <input type="checkbox" name="available" checked={product.available} onChange={handleChange} />
      </label>
      <button type="submit">Добавить Продукт</button>
    </form>
  );
};

export default AddProduct;