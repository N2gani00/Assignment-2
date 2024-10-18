import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Import your main App component
import './index.css'; // Import your CSS file if you have one

// Render the App component into the root element
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
