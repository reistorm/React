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
// const middleware = store => next => action => {
//   console.log('Доп. эффект');

//   setTimeout(() => {
//     console.log('тайм-ауты, вызовы api и др.');
//   }, 1000);

//   return next(action);
//   // Т.о. сперва console.log, dispatch(), setTimeout отработают друг за другом
// };

// Example 2
// Это logger middleware, который выводит действия, отправленные в store
// логи, которые сыпятся при действиях на сайте
const loggerMiddleware = store => next => action => {
  console.log('dispatching', action);
  return next(action);
}


// Example 3
// Создаем middleware для Redux-Saga


// EX Saga
const sagaMiddleware = configureStore({
  reducer: {
    ...rootReducer,
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware,
    loggerMiddleware, asyncMiddleware, thunk, sagaMiddleware), // указываем через запятую ex1, ex2, ex3 ...
});

// Запускаем нашу сагу
sagaMiddleware.run(mySaga);
// Presist

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElemetnById('root')
)