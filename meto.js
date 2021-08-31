// se aplica los metodos a un objeto 

// metodo foreach

//let  numero = [1,2,3,4,5,6,7];


//numero.forEach((value) => {
  //  console.log(value == 5 );
//})

 //var numero = [1,2,3,4,5,6,7];
 //for(i=0; i <numero.length; i++){
   //  console.log(numero[i]);
 //}

  //lo mismo pero mas resumido y utilinzdo forEach

  //var numero = [1,2,3,4,5,6,7,8];

  //numero.forEach(function(i) {
    //  console.log(i);
  //})

  // some serive para la verificacion 

  //let numeros = [1,2,3,4,5];

  //console.log(numeros.some((value)=> {
    //  return( value < 0);
  //}));


  // every es lo contrario a some 


  //let numeros = [1,2,3,4,5]; 
   //console.log(numeros.every((value) => {
     // return( value == 5)
  //}));
  
  //map

 //let numeros = [1,2,3,4,5,6];

//  let duplicar = numeros.map(value =>{
  //   return value * 2;
  //});

  //console.log(duplicar);

// filter filtar los elementos 

//let numeros = [1020,3340,9093,3920,1092];

//let numeros_grandes = numeros.filter((value) => {
  //  return (value > 2050);
//});
//console.log(numeros_grandes);
 

//reduce en ves de crear unn nuevo

let numero = [ 1,2,3,4,5,];
 let respuesta = numero.reduce((sumar,dato_actual) =>
         sumar + dato_actual, 0);
   console.log(respuesta);      
