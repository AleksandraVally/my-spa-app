import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/productsSlice';
import counterReducer from './reducer';




const store = configureStore({
    reducer: {
        products: productsReducer,
        counter: counterReducer,  
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;