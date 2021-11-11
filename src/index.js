import React from "react"
import reactDom from "react-dom";
import CounterApp from "./CounterApp";
// import PrimeraApp from "./PrimeraApp";
import './index.css'



const divRoot = document.querySelector('#app');

// console.log(divRoot);

reactDom.render( <CounterApp  contador = {0} />,divRoot);
// reactDom.render( <PrimeraApp  saludo = 'hola tu de yo'/>,divRoot);

// ( <PrimeraApp  saludo={hola soy goku por props} />,divRoot);