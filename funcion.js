


 // function suma(a,b) {
  
   // sum = a + b;
    
    //console.log("la suma es: " + sum)

  //}

  // suma(8,4);
  

  // funciones retornables 

  //funcion con retorno 

  //function dato_trabajador() {
    // var salario = 2550;
     //console.log("su salario es :" + salario);
     //return salario;
     //cualera de las dos maneras se puede ghacer 
  //}

//var obrero = dato_trabajador();
  //console.log(obrero);

  // funciones anonimas (flechas)


  //var resta = function (n1,n2) {  
    //return n1 - n2;

 // }
// console.log(resta(8,2));

// es lo mismp pero recumido

//var resta = (n1,n2) => n1 - n2;

//console.log(resta(8,2));

//var nombre = function () {
  //return "juan";
//}
 //console.log(nombre());

 // lo mismo pero resumio y anonimo

 //var nombre = () => "victor";
 //console.log(nombre());
 
 // funcion aninada = funcion dentro de otra funcion

 function operacion () {
   const pi = 3.14;
   function area(radio) {
       var area = pi * radio * radio;
       console.log("el area del circulo es:" + area);
      } 
      operacion.area = area;
  }

  var radio = 4;
  operacion();
  operacion.area(radio);
