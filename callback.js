
// es para decirle a la funcion los segundo para k entrege en ejecutacion es
//en este caso 7 segundo se demora en aparecer el hola mundo 
//setTimeout(function () {
  //  console.log("hola mundo");

//} ,7000);

const getUsuarioByID = ( id, callback ) => {
    const usuario = {
        id,
        nombre: `esteban`
    } 

    setTimeout( () =>  {
     callback(usuario)

    }, 1500)
}

getUsuarioByID ( 10, ( usuario ) => {
    console.log(usuario.id);
    console.log( usuario.nombre.toUpperCase( ));
} );