import '@testing-library/jest-dom'

import { getSaludo } from "../../base/02-template-string.js";

describe ('Pruebas en 02-template-string',   ()=> {

    test('prueba en el método getSaludo ', () => {
        
        const nombre = 'Yesid';

        const saludo = getSaludo( nombre);

        expect(saludo).toBe ( 'Hola '+ nombre);
    })

    //gestsaludo debe retonrar hola goku si no hay argumento pasdo en var nombre
    test('muestra hola Goku si no se envia argumento ', () => {
        

        const saludo = getSaludo( );

        expect(saludo).toBe ( 'Hola Goku' );
    })
    
    

})