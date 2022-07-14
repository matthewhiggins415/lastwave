import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe("pk_test_51LBLr0CIa15tYhSsq3q1th21L37h4GDbzjc798H6ZE1OGQiXg0VGaU1xUqy8254RFDZnZLXwUaFQuZV6usZZn7Yb00qaj9Woax");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
