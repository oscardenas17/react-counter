import React from 'react';
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";


describe('Pruebas en <PrimeraApp/>', () =>{

    test('Debe mostrar el mensaje "Hola tu"', () => {
        
        const saludo = 'Hola tu';

        const {getByText} = render(<PrimeraApp saludo={saludo} />)

        // wrapper.getByText
        expect(getByText (saludo) ).toBeInTheDocument();
    })
    
})