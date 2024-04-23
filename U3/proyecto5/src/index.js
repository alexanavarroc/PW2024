import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import Ejercicio19a from './Ejercicio19/Ejercicio19a';
import Ejercicio19b from './Ejercicio19/Ejercicio19b';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/Ejercicio19a' element={<Ejercicio19a/>} />
          <Route path='/Ejercicio19b' element={<Ejercicio19b/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();