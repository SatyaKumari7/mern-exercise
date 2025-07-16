import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Required for React 18/19
import App from './App';
//import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
