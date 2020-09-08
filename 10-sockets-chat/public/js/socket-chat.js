var socket = io();

const params = new URLSearchParams(window.location.search);
if (!params.has('nombre')) {
    throw new Error('El nombre es necesario');
}

const usuario = {
    nombre: params.get('nombre')
};


socket.on('connect', function() {
    console.log('Conectado al servidor');

    socket.emit('entrarChat', usuario, (resp) => {
        console.log(resp);
    });

});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});


// Enviar información
// socket.emit('crearMensaje', {
//     usuario: 'Fernando',
//     mensaje: 'Hola Mundo'
// }, function(resp) {
//     console.log('respuesta server: ', resp);
// });

// Escuchar información
socket.on('crearMensaje', mensaje => {

    console.log('Servidor:', mensaje);

});

//Escuchar cambios de usuarios
// cuando un usuario entra o sale del chat
socket.on('listaPersona', personas => {

    console.log(personas);

});

socket.on('mensajePrivado', mensaje => {

    console.log(mensaje);

});