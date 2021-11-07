describe('Pruebas en el archivo demo.test.js', ()=> {
    
    test ('Deben de ser iguales los Strings', ()=>{
   
    
        //1, inicializacion
        const mensaje = 'Hola mundo';
    
        //2, estimulo
        const mensaje2 = 'Hola mundo';
    
        
        //2, Obersvar el comportamiento
        expect( mensaje).toBe (mensaje2);
    
    })


});

// npm run test
