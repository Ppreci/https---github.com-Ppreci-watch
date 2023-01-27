import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CartState from './context/cart/CartState';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartState>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </CartState>
);

