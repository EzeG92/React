import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIslg1-FTjKZ2F3icf8-ZzL6snhrHXKbM",
  authDomain: "coderhouse-ecommerce-e3d25.firebaseapp.com",
  projectId: "coderhouse-ecommerce-e3d25",
  storageBucket: "coderhouse-ecommerce-e3d25.appspot.com",
  messagingSenderId: "447559667043",
  appId: "1:447559667043:web:910207e5fe584e9517d756"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
