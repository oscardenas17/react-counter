import React from 'react';
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
// import { render } from "@testing-library/react";
import CounterApp from "../CounterApp";




describe('Pruebas en <CounterApp/>', () =>{

    // test('Debe mostrar el mensaje "Hola tu"', () => {
        
    //     const saludo = 'Hola tu';

    //     const {getByText} = render(<PrimeraApp saludo={saludo} />)

    //     // wrapper.getByText
    //     expect(getByText (saludo) ).toBeInTheDocument();
    // })

    test('Debe de mostrar <CounterApp /> correctamente', () => {

        const wrapper = shallow ( <CounterApp /> )

        expect (wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar el valor por defecto de 100', () => {

        const wrapper = shallow ( <CounterApp value= {100} /> );
         
        const counterText = wrapper.find('h2').text().trim(); 

        expect (counterText).toBe('100');
    })
        
})