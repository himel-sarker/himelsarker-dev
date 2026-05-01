import React from 'react';
import ReactDOM from 'react-dom/client';
import Popup from './components/Header/Popup.jsx'; // ✅ Import Popup instead of App
//import './styles/globals.css'; // Import global styles
//import './styles/variables.css'; // Import CSS variables

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Popup /> {/* ✅ Render Popup instead of App */}
  </React.StrictMode>
);