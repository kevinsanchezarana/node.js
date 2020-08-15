const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .usage(`Usage: $0 listar base=5 [options]`)
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo de la tabla de multiplicar', opts)
    .example(`Example: node app.js listar base=5 --limite=10`)
    .epilog('copyright 2019')
    .argv;

module.exports = {
    argv
}