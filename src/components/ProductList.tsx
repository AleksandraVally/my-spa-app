import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import ProductCard from './ProductCard';

interface ProductListProps {
    filter: 'all' | 'favorites';
    searchQuery: string; 
}

const ProductList: React.FC<ProductListProps> = ({ filter, searchQuery }) => {
    const products = useSelector((state: RootState) => state.products.products);

    const filteredProducts = products.filter(product => {
        const matchesFilter = filter === 'favorites' ? product.isLiked : true;
        const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch; 
    });

    return (
        <div className="product-list">
            {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
