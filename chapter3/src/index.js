import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/css/index.css';
//import { Halaman1 } from './pages/Halaman1';
import { Hal } from './routes/Hal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hal></Hal>
  </React.StrictMode>
);

