import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import "./Image/usa-best-places-miami-5.jpg";

ReactDOM.render(
  <>
  <BrowserRouter>
   <App />
  </BrowserRouter>
  </>,
  document.getElementById('root')
);

