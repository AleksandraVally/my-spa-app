
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    isLiked: boolean;
    title: string;
    description: string; 
    isFavorite: boolean; 
}

interface ProductsState {
    products: Product[];
}

const initialState: ProductsState = {
    products: [],
};

const productsSlice = createSlice({
    name: 'products',
    initialState, 
    reducers: {
        addProduct(state, action: PayloadAction<Product>) {
            state.products.push(action.payload);
        },
        removeProduct(state, action: PayloadAction<number>) {
            
            state.products = state.products.filter(product => product.id !== action.payload);
        },
        toggleLike(state, action: PayloadAction<number>) {
            const product = state.products.find(p => p.id === action.payload);
            if (product) {
                product.isLiked = !product.isLiked;
            }
        },
        setProducts(state, action: PayloadAction<Product[]>) {
            state.products = action.payload;
        },
    },
});

export const { toggleLike, setProducts, addProduct, removeProduct, } = productsSlice.actions;
export default productsSlice.reducer;
