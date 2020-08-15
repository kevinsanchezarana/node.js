const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    const nombreArchivo = 'db/data.json';
    const data = JSON.stringify(listadoPorHacer);
    const scapedData = new Uint8Array(Buffer.from(data));
    fs.writeFile(nombreArchivo, scapedData, (err) => {
        if (err) throw new Error(err);
        return nombreArchivo;
    });

}

const crear = descripcion => {

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;

}

module.exports = {
    crear
}