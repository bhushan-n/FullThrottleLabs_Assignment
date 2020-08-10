import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//Global CSS file
import './index.css';
//ServiceWorker but we won't need it
import * as serviceWorker from './serviceWorker';

//Components
import App from './App';
import ErrorBoundary from './hoc/ErrorBoundary/ErrorBoundary';

//Wrapping the Whole App in a Error Boundary
//to gracefully handle run-time errors
ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
