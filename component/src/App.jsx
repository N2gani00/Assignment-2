// src/App.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import ComponentUi from './components/ComponentUi'; // Make sure the path is correct
import './index.css';

const App = () => {
  return (
    <React.StrictMode>
      <ComponentUi />
    </React.StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<App />);

export default App; // Ensure this line is present
