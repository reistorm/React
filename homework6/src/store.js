import { configureStore, createSlice } from '@reduxjs/toolkit';

// Создание слайса для продуктов
const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    removeProduct: (state, action) => {
      return state.filter(product => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const { id, updatedData } = action.payload;
      const existingProduct = state.find(product => product.id === id);
      if (existingProduct) {
        Object.assign(existingProduct, updatedData);
      }
    },
    toggleAvailability: (state, action) => {
      const product = state.find(product => product.id === action.payload);
      if (product) {
        product.available = !product.available;
      }
    },
  },
});

// Экспорт действий
export const { addProduct, removeProduct, updateProduct, toggleAvailability } = productSlice.actions;

// Создание и экспорт хранилища
const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});

export default store;