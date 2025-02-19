import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Components/AddionalCss/animated.css'
// import './Components/AddionalCss/fontawesome.css'
import './Components/AddionalCss/owl.css'
import './Components/AddionalCss/templatemo-space-dynamic.css'
import App from './App';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

