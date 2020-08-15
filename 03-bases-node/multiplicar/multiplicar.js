const fs = require('fs');
const colors = require('colors');

let crearArchivoTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            return reject(`La base ${base} no es un numero`);
        }

        let tabla = '';
        let nombreArchivo = `tablas/tabla-${base}-al-${limite}.txt`;
        let nombreArchivoColor = colors.green(nombreArchivo);

        for (let i = 1; i <= limite; i++) {
            tabla += `${base} * ${i} = ${base*i}\n`;
        }

        const data = new Uint8Array(Buffer.from(tabla));
        fs.writeFile(nombreArchivo, data, (err) => {
            if (err) reject(err);
            return resolve(nombreArchivoColor);
        });

    });

}

let listarTabla = (base, limite = 10) => {

    console.log('============'.green);
    console.log(`Tabla del ${base}`.green);
    console.log('============'.green);

    if (!Number(base)) {
        return reject(`La base ${base} no es un numero`);
    }

    if (!Number(limite)) {
        return reject(`La limite ${limite} no es un numero`);
    }

    let tabla = '';
    for (let i = 1; i <= limite; i++) {
        tabla += `${base} * ${i} = ${base*i}\n`;
    }

    return tabla;

}

module.exports = {
    crearArchivoTabla,
    listarTabla
};