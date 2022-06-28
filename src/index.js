import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// import FramerAdvanced from './FramerAdvanced';

// font
import './fonts/Poppins/Poppins-Regular.ttf'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      {/* <FramerAdvanced /> */}
    </Router>
  </React.StrictMode>
);