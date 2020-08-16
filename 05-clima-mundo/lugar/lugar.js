const axios = require('axios');

const apiKey = '484853074704822397669x7102';

const getLugarLatLng = async(provincia, direccion) => {
    const encodedUrl = encodeURI(`https://geocode.xyz/?locate=location?city=${direccion},${provincia}&auth=${apiKey}&json=1`);
    // Make a request for a user with a given ID
    const resp = await axios.get(encodedUrl);
    const data = resp.data;
    if (data.matches !== undefined && data.matches === null) {
        throw new Error(`No existen resultados para la provincia ${provincia} y dirección ${direccion} dados`);
    }

    const { standard, latt, longt } = data;
    const { addresst } = standard;

    return {
        direccion: addresst,
        lat: latt,
        lng: longt
    }
}

module.exports = {
    getLugarLatLng
}