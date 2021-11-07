import React from "react"
import reactDom from "react-dom";
import CounterApp from "./CounterApp";


import './index.css'



const divRoot = document.querySelector('#app');

// console.log(divRoot);

reactDom.render
// ( <PrimeraApp  />,divRoot);
( <CounterApp  contador = {0} />,divRoot);
// ( <PrimeraApp  saludo={hola soy goku por props} />,divRoot);