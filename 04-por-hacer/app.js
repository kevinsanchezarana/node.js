const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];
let descripcion = argv.descripcion;
let completada = argv.completada;

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log(completada);
        let tareas = porHacer.getListado(completada);
        for (const tarea of tareas) {
            console.log('========Por Hacer========='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completada);
            console.log('=========================='.green);
        }
        break;
    case 'actualizar':
        const actualizado = porHacer.actualizar(descripcion, completada);
        console.log(actualizado);
        break;
    case 'borrar':
        const borrada = porHacer.borrar(descripcion);
        console.log(borrada);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}