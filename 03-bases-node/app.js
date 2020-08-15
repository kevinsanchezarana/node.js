const { crearArchivoTabla, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'listar':
        let tabla = listarTabla(base, limite);
        console.log(tabla);
        break;
    case 'crear':
        crearArchivoTabla(base, limite).then(nombreArchivo => {
            console.log(`Archivo creado: ${nombreArchivo}`);
        }).catch(err => {
            console.log(err);
        });
        break;
    default:
        console.log('Comando no reconocido');
        break;
}