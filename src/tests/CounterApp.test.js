import React from 'react';
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
// import { render } from "@testing-library/react";
import CounterApp from "../CounterApp";




describe('Pruebas en <CounterApp/>', () =>{

    // const wrapper = shallow ( <CounterApp /> )

    let wrapper = shallow ( <CounterApp /> );
    beforeEach(  ()=>{
        wrapper = shallow ( <CounterApp /> )
    });

    test('Debe de mostrar <CounterApp /> correctamente', () => {

        // const wrapper = shallow ( <CounterApp /> )

        expect (wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar el valor por defecto de 100', () => {

        const wrapper = shallow ( <CounterApp value= {100} /> );
         
        const counterText = wrapper.find('h2').text().trim(); 

        expect (counterText).toBe('100');
    })

    test('debe incrementar con el botón +1', () => {
        
        // const wrapper = shallow ( <CounterApp /> )
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim(); 
        expect(counterText).toBe('1');

    })


    test('debe decrementar con el botón -1', () => {
         // const wrapper = shallow ( <CounterApp /> )
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim(); 
        expect(counterText).toBe('-1');

    })

    test('debe resetear el valor con el botón reset', () => {
        // const wrapper = shallow ( <CounterApp /> )
        const wrapper = shallow ( <CounterApp value= {105} /> );
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim(); 

        expect(counterText).toBe('105');
   })
    
        
})