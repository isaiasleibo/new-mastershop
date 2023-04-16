import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes as Pages, Route as Page } from 'react-router-dom';
import './index.css';
// Pages
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Product } from './pages/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Pages>
      <Page path="/" element={<Home />} />
      <Page path="/tienda" element={<Shop />} />
      <Page path="/tienda/:type/:id" element={<Product />} />
    </Pages>
  </Router>
);
