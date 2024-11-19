import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; 
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import asyncMiddleware from './asyncMiddlewareEx3';
import App from './App';
import './index.css';
import dataReducer from './dataReducer';

// Example 1
// Это промежуточное ПО для демонстрации доп.эффектов
const middleware = store => next => action => {
  console.log('Доп. эффект');

  setTimeout(() => {
    console.log('тайм-ауты, вызовы api и др.');
  }, 1000);

  return next(action);
  // Т.о. сперва console.log, dispatch(), setTimeout отработают друг за другом
};

// Example 2
// Это logger middleware, который выводит действия, отправленные в store
// логи, которые сыпятся при действиях на сайте
const loggerMiddleware = store => next => action => {
  console.log('dispatching', action);
  return next(action);
}


// Example 3
// Создаем middleware для Redux-Saga
const sagaMiddleware = createSagaMiddleware();

// Конфигурация для redux-persist
const persistConfig = {
  key: 'root', // Ключ, по которому хранится состояние в storage
  storage, // объект storage для хранения 
};

// Создаем "персистентный" редьюсер с использованием persistReducer и конфигурации
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Настраиваем store с персистентным редьюсером и всеми middleware
const store = configureStore({
  reducer: persistedReducer, // используем персистентный редьюсер
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST'], // игнорируем действие 'persist/PERSIST', 
      // т.к. оно не сериализуемо
    },
  }).concat(middleware, loggerMiddleware, asyncMiddleware, thunk, sagaMiddleware),
});

// Запускаем нашу сагу
sagaMiddleware.run(mySaga);

// Инициализируем persistor, который будет использоваться для сохранения/восстановления состояния
let persistor = persistStore(store);

// Оборачиваем наше приложение в  Provider и PersistGаte для предоставления store и persistor
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>{/*Подключаем PersistGate с persistor */}
      <App />
    </PersistGate>
  </Provider>,
  document.getElemetnById('root')
)

// Presist

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElemetnById('root')
// )