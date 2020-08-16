const argv = require('./config/yargs').argv;
const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

const provincia = argv.provincia;
const direccion = argv.direccion;

const getInfo = async(provincia, direccion) => {

    let msg = '';
    try {
        const { lat, lng } = await getLugarLatLng(provincia, direccion);
        const temperatura = await getClima(lat, lng);
        msg = `El clima de la dirección ${direccion} y provincia ${provincia} es de ${temperatura} °C`;
    } catch (err) {
        msg = `No se pudo determinar el clima para la dirección ${direccion} y provincia ${provincia}`;
    }

    return msg;

}

getInfo(provincia, direccion).then(console.log).catch(console.log);