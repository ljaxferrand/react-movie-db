import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);