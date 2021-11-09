import { getHeroeByIdAsync } from "../base/09-promesas";
import heroes from "../data/heroes";


describe('Pruebas con promesas', () => {

    beforeEach(async () => {
        jest.setTimeout(10000)
    })
    
    test('getHeroeByIdAsync debe retornar un heroe async', (done) => {
       
        const id = 1;

        getHeroeByIdAsync (id)
            .then( heroe => {
                expect (heroe).toBe(heroes[0]);
                done();
            })    
            
    });


    test('debe obtener un error si el heroe por id no existe', (done) => {
        
        const id = 11;
        getHeroeByIdAsync(id)
          .catch( error => {
                expect(error).toBe('No se pudo encontrar el heroe');
                done();

      });



    }); 
        
})
