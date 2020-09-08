const { io } = require('../server');
const { Usuarios } = require('../classes/usuarios');
const { crearMensaje } = require('../utils/utils');

const usuarios = new Usuarios();

io.on('connection', (client) => {

    client.on('entrarChat', (data, callback) => {

        const { nombre } = data;
        const { id } = client;
        if (!nombre) {
            return callback({
                error: true,
                mensaje: "El nombre del usuario es necesario"
            });
        }

        const personas = usuarios.agregarPersona(id, nombre);

        client.broadcast.emit('listaPersona', usuarios.getPersonas());

        callback(personas);

    });

    client.on('crearMensaje', data => {
        const persona = usuarios.getPersona(client.id);
        const mensaje = crearMensaje(persona.nombre, data.mensaje);
        client.broadcast.emit('crearMensaje', mensaje);
    });

    client.on('disconnect', () => {
        const personaBorrada = usuarios.borrarPersona(client.id);
        client.broadcast.emit('crearMensaje', crearMensaje('Administrador', `${personaBorrada.nombre} salió`));
        client.broadcast.emit('listaPersona', usuarios.getPersonas());
    });


    //Mensajes privados
    client.on('mensajePrivado', data => {
        const persona = usuarios.getPersona(client.id);
        client.broadcast.to(data.para).emit('mensajePrivado', crearMensaje(persona.nombre, data.mensaje));
    });


});