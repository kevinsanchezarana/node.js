const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completada = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .usage(`Usage: $0 listar base=5 [options]`)
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completada })
    .command('borrar', 'Borrar un elemento por hacer', { descripcion })
    .example(`Example: node app crear --descripcion="Prueba crear tarea"`)
    .example(`Example: node app actualizar --descripcion="Prueba crear tarea" --c=true`)
    .epilog('copyright 2019')
    .help('help')
    .argv;

module.exports = {
    argv
}