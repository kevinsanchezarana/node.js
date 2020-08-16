const axios = require('axios');

//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
const apiKey = '09bcbf78869bac1484bf85a8c622a599';

const getClima = async(lat, lng) => {
    const encodedUrl = encodeURI(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`);
    // Make a request for a user with a given ID
    const resp = await axios.get(encodedUrl);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}