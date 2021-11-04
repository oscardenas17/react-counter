import React from 'react';
import PropTypes from 'prop-types'

const CounterApp  = ( {contador} ) => {
    return (
        <>
            <h1>Counter App</h1>
            <h2>{contador}</h2>
        </>

    )
}

CounterApp.propTypes = {
    contador : PropTypes.number
 }
 
//  PrimeraApp.defaultProps = {
//     subtitulo: 'Soy un subtitulo'
//  }
 
 export default CounterApp;

