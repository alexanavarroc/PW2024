import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'; 
import App from './App';
import Componente1 from './Componente1';
import Componente2 from './Componente2';
import Componente3 from './Componente3';
import Ejercicio2 from './Ejercicio2/Ejercicio2';
import Ejercicio3 from './Ejercicio3/Ejercicio3';
import Ejercicio4 from './Ejercicio4/Ejercicio4';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Ejercicio4 imagen="https://picsum.photos/id/42/400/300" titulo="Titulo" texto="Esto es un texto dentro de una card :)"/>

    {/* <Ejercicio3/> */}
    {/* <Ejercicio2 nombre="Alexa" año="2024"> </Ejercicio2> */}
    {/* <Ejercicio2 nombre="Daniel"> </Ejercicio2> */}
    {/* <Ejercicio2 año="2024"> </Ejercicio2> */}
 

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
