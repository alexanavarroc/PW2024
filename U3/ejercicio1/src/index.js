import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Componente1 from './Componente1';
import Componente2 from './Componente2';
import Componente3 from './Componente3';
import Ejercicio2 from './Ejercicio2/Ejercicio2';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Ejercicio2 nombre="Alexa" año="2024"> </Ejercicio2>
    <Ejercicio2 nombre="Daniel"> </Ejercicio2>
 

   {/* <App /> */}
   {/* <Componente1 /> */}
   {/* <Componente1 /> */}
   {/* <Componente1 /> */}

   {/* <Componente2 /> */}
   {/* <Componente3 /> */}


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
