import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe('Pruebas en fnunciones de Héroes', () => {

  test('Debe de retornar un heroe por id', () => {
    
    const id= 1;
    const heroe  = getHeroeById(id);

    const heroeData = heroes.find(h=> h.id === id)

    expect(heroe).toEqual(heroeData);

  })
  
  test('Debe de retornar undefined si el heroe no existe', () => {
    
    const id= 10;
    const heroe  = getHeroeById(id);

    
    expect(heroe).toBe(undefined);

  })

  //retornar arreglo con los heroes de dc con el owner
  //toEqual al arreglo filtrado
  test('retornar arreglo con los heroes de dc', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);

    const heroesData = heroes.filter( h=>h.owner === owner);

    expect(heroes).toEqual(heroesData);
  }) 


  //debe retornar arregl con los heroes de marvel
  //length=2
  test('retornar arreglo con los heroes de marvel', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);


    expect(heroes.length).toBe(2);
  })
    
    
})