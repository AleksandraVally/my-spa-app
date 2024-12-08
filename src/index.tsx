import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles.css';
import './components/CreateProduct.tsx'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);


