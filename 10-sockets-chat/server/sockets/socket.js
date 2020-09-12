const { io } = require('../server');
const { Usuarios } = require('../classes/usuarios');
const { crearMensaje } = require('../utils/utils');

const usuarios = new Usuarios();

io.on('connection', (client) => {

    client.on('entrarChat', (data, callback) => {

        const { nombre, sala } = data;
        const { id } = client;
        if (!nombre || !sala ) {
            return callback({
                error: true,
                mensaje: "El nombre y sala del usuario son necesarios"
            });
        }

        //Une a un cliente a una sala especifica para que envíe mensajes a esa sala
        client.join(sala);

        usuarios.agregarPersona(id, nombre, sala);

        client.broadcast.to(sala).emit('listaPersona', usuarios.getPersonasPorSala(sala));

        callback(usuarios.getPersonasPorSala(sala));

    });

    client.on('crearMensaje', data => {
        const persona = usuarios.getPersona(client.id);
        const mensaje = crearMensaje(persona.nombre, data.mensaje);
        client.broadcast.to(persona.sala).emit('crearMensaje', mensaje);
    });

    client.on('disconnect', () => {
        const personaBorrada = usuarios.borrarPersona(client.id);
        client.broadcast.to(personaBorrada.sala).emit('crearMensaje', crearMensaje('Administrador', `${personaBorrada.nombre} salió`));
        client.broadcast.to(personaBorrada.sala).emit('listaPersona', usuarios.getPersonasPorSala(personaBorrada.sala));
    });


    //Mensajes privados
    client.on('mensajePrivado', data => {
        const persona = usuarios.getPersona(client.id);
        client.broadcast.to(data.para).emit('mensajePrivado', crearMensaje(persona.nombre, data.mensaje));
    });


});