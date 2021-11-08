import { getUser, getUsuarioActivo } from "../../base/05-funciones"



describe('Pruebas en 05 funciones', () => {

    test('getUser debe retornar un objeto', () => {
    
    const userTest = {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }

    const user = getUser();

    expect (user).toEqual(userTest);

    })

    test('Get user retorna un objeto con nombre por parametro', () => {
        
        const nombre = 'Yesid';
        const userActivo ={
            uid: 'ABC567',
            username: nombre
        }

        const activo = getUsuarioActivo(nombre);

        expect (activo).toEqual(userActivo)
    })
    


   
    
})

