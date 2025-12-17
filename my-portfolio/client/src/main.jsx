import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// CRITICAL: Import the new App.css file which contains all the custom styles
import './App.css'; 
// NOTE: We intentionally do NOT import ./index.css anymore

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);