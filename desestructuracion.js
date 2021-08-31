

//const Digimon = {
    //nombre:'Agumon',
    //apellido: 'graymon',
    //poder: 'FlamaBebe',
    //getNombre() {
    //    return `${this.nombre} ${this.apellido} ${this.poder}`;
  //  }
//}


 //
//const nombre = Digimon.nombre;
//const apellido = Digimon.apellido;
//const poder = Digimon.poder;

//const {nombre,apellido,poder} = Digimon;


 const pokemones = {
    nombre : 'lugya',
    apellido: 'legendario',
    poder: 'desconocido',
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`;

      
    }
 }

  function imprimeHeroe(heroe) {
      const { nombre, apellido, poder, edad = 0} =  heroe;
      console.log(nombre, apellido, poder, edad);

  }
  
  imprimeHeroe( pokemones); 
   
 //const nombre = pokemones.nombre;
//const apellido = pokemones.apellido;
//const poder = pokemones.poder;


 //console.log(nombre,apellido,poder);