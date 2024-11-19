// const initialState = {
//     data: []
// };

// function rootReducer(state = initialState, action) {
//     return state;
// }

// export default rootReducer;


// Persist

import { combineReducers } from 'redux';
import dataReducer from './dataReducer'; // убедиться, что путь правильный

const rootReducer = combineReducers({
    root: (state = { data: [] }, action) => state, // Это ваш существующий редьюсер 
    data: dataReducer, // Это ваш новый dataReducer
});
export default rootReducer;
