import React from 'react';  //we are importing react dom,for internet app
import ReactDOM from 'react-dom';
// import './index.css'; because i deleted the index.css file
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // is grapping  our output file fopr our components to be displayed

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
