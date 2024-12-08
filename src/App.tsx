import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import store from './store';
import ProductDetail from './components/ProductDetail'
import CreateProduct from './components/CreateProduct';

import './styles/styles.css';




const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/products" />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/create-product" element={<CreateProduct />} /> {}
                </Routes>
            </Router>
        </Provider>
    );
};



export default App;


