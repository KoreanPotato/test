import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Register from './components/registration-components';
import Schedule from './components/Schedule-component'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Schedule/>
  </React.StrictMode>
);


