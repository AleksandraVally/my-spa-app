import React from 'react';
import { Product } from '../features/productsSlice';
import { useDispatch } from 'react-redux';
import { toggleLike, removeProduct } from '../features/productsSlice';
import { useNavigate } from 'react-router-dom';
import '/Users/admin/Desktop/my-spa-app/src/components/ProductCard.css'; 

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCardClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        
        if ((e.target as HTMLElement).closest('.like-button, .delete-button')) {
            return;
        }
        navigate(`/products/${product.id}`);
    };

    return (
        <div className="product-card" onClick={handleCardClick}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title.length > 30 ? `${product.title.slice(0, 30)}...` : product.title}</h3>
            <button className="like-button" onClick={() => dispatch(toggleLike(product.id))}>
                <i className={product.isLiked ? 'fas fa-heart' : 'far fa-heart'}></i>
            </button>
            <button className="delete-button" onClick={() => dispatch(removeProduct(product.id))}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};


  

export default ProductCard;