import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

const loader = document.getElementById('app-loader');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    if (!loader) return;

    loader.classList.add('is-hidden');
    loader.setAttribute('aria-hidden', 'true');

    window.setTimeout(() => {
      loader.remove();
    }, 320);
  });
});
