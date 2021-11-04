import React from 'react';
import PropTypes from 'prop-types'




const PrimeraApp =  ( { saludo, subtitulo } ) => {
   
   return(
         <>
            {/* { <pre> JSON.stringify(saludo, null, 3) }</pre> } */}
            <h1> Hola mundo</h1>
            <p>{ saludo }</p>
            <p>   START WITH REACT</p>
            <p>{subtitulo}</p>
         </>
      );

}

PrimeraApp.propTypes = {
   saludo : PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
   subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;