const argv = require('yargs')
    .options({
        provincia: {
            alias: 'p',
            desc: 'Provincia de la ciudad para obtener el clima',
            demand: true
        },
        direccion: {
            alias: 'd',
            desc: 'Dirección de la ciudad para obtener el clima',
            demand: true
        }
    })
    .example('node app --p="Canarias" --d="Vega de San Mateo"')
    .epilog('copyright 2020')
    .help('help')
    .argv;

module.exports = {
    argv
}