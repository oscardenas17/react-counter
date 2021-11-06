import React, {useState} from 'react';
import PropTypes from 'prop-types'

const CounterApp  = ( {contador} ) => {

    const [counter, setCounter] = useState(0);
    
    // handleAdd
    const handleAdd = ()=> {
        setCounter (counter + 1);
        //setCounter ( (c)=> c+1 );
    }
    
    
    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>

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

