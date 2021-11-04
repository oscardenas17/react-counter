import React from 'react';
import PropTypes from 'prop-types'

const CounterApp  = ( {contador} ) => {
    
    // handleAdd
    const handleAdd = (e)=> {
      console.log(e)
    }
    
    
    return (
        <>
            <h1>Counter App</h1>
            <h2>{contador}</h2>

            {/* <button onClick={ (e) => {handleAdd(e) } }> +1 </button> */}
            <button onClick={ handleAdd }> +1 </button>
            {/* funcion de fecla donde e es enviado como primer argumento al haddleadd s */}
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

