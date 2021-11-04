import React from 'react';
import PropTypes from 'prop-types'


const saludo = ' Hello World' ;

const PrimeraApp =  ( {saludo } ) => {

   return(
         <>
            {/* { <pre> JSON.stringify(saludo, null, 3) }</pre> } */}
            <h1> Hola mundo</h1>
            <p>{saludo}</p>
            <p>   START WITH REACT</p>
         </>
      );

}

PrimeraApp.propTypes = {
   saludo : PropTypes.string.isRequired
}

export default PrimeraApp;