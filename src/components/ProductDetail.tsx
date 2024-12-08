import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import './ProductDetail.css';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
   
}

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const products = useSelector((state: RootState) => state.products.products);
    const [product, setProduct] = useState<Product | undefined>(undefined);

    useEffect(() => {
        if (id && products) {
            const foundProduct = products.find(p => p.id === parseInt(id, 10));
            setProduct(foundProduct);
        }
    }, [id, products]);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-detail">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            {}

            <Link to="/products">
                <button>Вернуться на главную страницу</button>
            </Link>
        </div>
    );
};

export default ProductDetail;