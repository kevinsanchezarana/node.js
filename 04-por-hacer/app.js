const argv = require('./config/yargs').argv;
const { crear } = require('./por-hacer/por-hacer');

let comando = argv._[0];
let descripcion = argv.descripcion;
let completada = argv.completada;

switch (comando) {
    case 'crear':
        let tarea = crear(descripcion);
        console.log(tarea);
        console.log('Crear tarea a realizar');
        break;
    case 'listar':
        console.log('Listar tareas a realizar');
        break;
    case 'actualizar':
        console.log('Actualizar tarea a realizar');
        break;
    default:
        console.log('Comando no reconocido');
        break;
}