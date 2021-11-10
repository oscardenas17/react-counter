import React from 'react';
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
// import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";




describe('Pruebas en <PrimeraApp/>', () =>{

    // test('Debe mostrar el mensaje "Hola tu"', () => {
        
    //     const saludo = 'Hola tu';

    //     const {getByText} = render(<PrimeraApp saludo={saludo} />)

    //     // wrapper.getByText
    //     expect(getByText (saludo) ).toBeInTheDocument();
    // })

    test('Debe de mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'hola tu de yo';
        const wrapper = shallow ( <PrimeraApp saludo = {saludo}/> )

        expect (wrapper).toMatchSnapshot();
    })
        
})

// https://enzymejs.github.io/enzyme/
// https://www.npmjs.com/package/enzyme-to-json  enzyme-to-json

// https://github.com/wojtekmaj/enzyme-adapter-react-17  enzyme-adapter-react-17
// Paso 1. Inst JEST en el proyecto:
// npm install --save-dev jest

// P2. Inst la versión de enzime para REACT 17:
// npm install --legacy-peer-deps --save-dev @wojtekmaj/enzyme-adapter-react-17

// P3. Add a setupTests.js:

// import Enzyme from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
 
// Enzyme.configure({ adapter: new Adapter() });
// P4. Inst las dependencias faltantes:

// npm install --save-dev enzyme

// P5. Inst enzyme-to-json:

// npm install --save-dev enzyme-to-json

// P6. Add a setupTest.js:

// import {createSerializer} from 'enzyme-to-json';
// expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));