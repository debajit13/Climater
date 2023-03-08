import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #fceebd;
    font-family: 'Roboto', sans-sarif;
    margin: 0;
  } 

  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
