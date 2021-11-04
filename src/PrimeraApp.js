import React from 'react';


const saludo = ' Hello World' ;

const PrimeraApp =  ( {saludo = "hola, soy Goku¡"} ) => {

   return(
         <>
            {/* { <pre> JSON.stringify(saludo, null, 3) }</pre> } */}
            <h1> Hola mundo</h1>
            <p>{saludo}</p>
            <p>   START WITH REACT</p>
         </>
      );



}

export default PrimeraApp;