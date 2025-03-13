import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Set base URL for assets
const baseUrl = import.meta.env.BASE_URL || '/';
document.documentElement.style.setProperty('--base-url', `"${baseUrl}"`);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
