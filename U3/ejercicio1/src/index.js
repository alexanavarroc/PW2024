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
import Ejercicio4b from './Ejercicio4/Ejercicio4b';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
//Arreglo que almacena objetos JSON para la(s) tarjetas :)!
const arregloDatos =  [
{
  img:"https://picsum.photos/180/120?random=1",
  titulo:'Titulo 1',
  texto:'Esto es un texto dentro de una card :)'
},

{
  img:"https://picsum.photos/180/120?random=1",
  titulo:'Titulo 2',
  texto:'Ésta es la segunda card :)'
},

{
  img:"https://picsum.photos/180/120?random=1",
  titulo:'Titulo 3',
  texto:'Ésta es la tercera card :)'
},


];

const arregloAlert =  [
  {
    alert:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
     tipoA:"alert alert-dark"
  },
  
  {
    alert:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
     tipoA:"alert alert-primary"
  },
  
  {
    alert:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
     tipoA:"alert alert-danger"
  },
  
  
  ];

root.render(
  <React.StrictMode>
    {/* Ejercicio 5  */}
{
  arregloDatos.map( (dato) => { 
    return(

    <Ejercicio4
    imagen={dato.img}
    titulo={dato.titulo}
    texto={dato.texto}
    /> 

     ); 
  })
}



{
  arregloAlert.map ((datoA) => {
    return(
      <Ejercicio4b alert={datoA.alert} tipoA={datoA.tipoA}/>
    );
  })
}



    <Ejercicio4b alert="Lorem ipsum dolor sit amet, consectetur adipiscing elit." tipoA="alert alert-primary"/>
    <Ejercicio4b alert="Lorem ipsum dolor sit amet, consectetur adipiscing elit." tipoA="alert alert-dark"/>
    <Ejercicio4b alert="Lorem ipsum dolor sit amet, consectetur adipiscing elit." tipoA="alert alert-danger"/>
    <Ejercicio4b alert="Lorem ipsum dolor sit amet, consectetur adipiscing elit." tipoA="alert alert-warning"/>

    <Ejercicio3/>
    <Ejercicio2 nombre="Alexa" año="2024"> </Ejercicio2>
    <Ejercicio2 nombre="Daniel"> </Ejercicio2>
    <Ejercicio2 año="2024"> </Ejercicio2>
 

   <App />
   <Componente1 />
   <Componente1 />
   <Componente1 />

   <Componente2 />
   <Componente3 />


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
