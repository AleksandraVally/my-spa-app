// rootReducer.js
import { combineReducers } from 'redux';
import counterReducer from './reducer';
import productsReducer from './features/productsSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
    products: productsReducer,
});

export default rootReducer;