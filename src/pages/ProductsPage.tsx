
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ProductList from '../components/ProductList';
import Filter from '../components/Filter';
import { setProducts } from '../features/productsSlice';
import axios from 'axios';
import Search from '../components/Search';
import CreateProduct from '../components/CreateProduct';


const api = axios.create({
    baseURL: 'https://fakestoreapi.com'
});

const ProductsPage: React.FC = () => {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState<'all' | 'favorites'>('all');
    const [searchQuery, setSearchQuery] = useState('');

    

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get('/products'); 
                dispatch(setProducts(response.data));
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, [dispatch]);

    return (
        <div>
            <Filter onChange={setFilter} />
            <Search value={searchQuery} onChange={setSearchQuery} />
            <ProductList filter={filter} searchQuery={searchQuery} /> {}
            <CreateProduct />
        </div>
    );
};

export default ProductsPage;