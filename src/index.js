import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './assets/styles/global.css';

/**
 * Eufy内容驱动的智能增长决策系统
 * Application entry point
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
