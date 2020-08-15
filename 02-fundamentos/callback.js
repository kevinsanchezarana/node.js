//La funcion que se le pasa al setTimeout es un callback
//Callback es la funcion que se debe ejecutar cuando responsa un evento de forma asincrona.
setTimeout(() => {
    console.log('Hola Mundo');
}, 3000);

let getUserById = (id, callback) => {

    let usuario = {
        nombre: 'Pepe',
        id
    };

    if (id === 20) {
        callback("No se ha encontrado el usuario en la BD", null);
        return;
    }

    callback(null, usuario);
}

//Los parametros de los callback suelen ser si hay error y datos
getUserById(20, (err, usuario) => {
    if (err) {
        console.log(`El usuario no existe en la BD`);
        return;
    }
    let { id } = usuario;
    console.log(`Usuario con ${id} encontrado correctamente`, usuario);

})