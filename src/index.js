import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes as Pages, Route as Page } from 'react-router-dom';
import './index.css';
// Pages
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Pages>
      <Page exact path="/" element={<Home />} />
      <Page exeact path="/tienda" element={<Shop />} />
    </Pages>
  </Router>
);
