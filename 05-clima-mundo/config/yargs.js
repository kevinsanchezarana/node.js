const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Dirección de la ciudad para obtener el clima',
            demand: true
        }
    })
    .epilog('copyright 2020')
    .help('help')
    .argv;

module.exports = {
    argv
}