import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../features/productsSlice'; 
import { Product } from '../features/productsSlice';

const CreateProduct: React.FC = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !description || !price) { 
            setError('Все поля обязательны для заполнения');
            return;
        }
    
        if (isNaN(Number(price)) || Number(price) <= 0) {
            setError('Цена должна быть положительным числом');
            return;
        }
    
        const newProduct: Product = {
            id: Date.now(),
            name,
            description,
            price: Number(price),
            image: '', 
            isLiked: false,
            title: name,
            isFavorite: false,
        };
    
        dispatch(addProduct(newProduct));
        navigate('/products');
    };

    return (
        <div className="create-product">
            <h1>Создать продукт</h1>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Название:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Описание:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Цена:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Создать продукт</button>
            </form>
        </div>
    );
};

export default CreateProduct;
