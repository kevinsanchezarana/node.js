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

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = descripcion => {

    cargarDB();

    let porHacer = {
        descripcion,
        completada: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;

}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completada = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    if (index >= 0) {
        listadoPorHacer[index].completada = completada;
        guardarDB();
        return true;
    }
    return false;
}

const borrar = descripcion => {
    cargarDB();

    nuevoListadoPorHacer = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });

    if (listadoPorHacer.length !== nuevoListadoPorHacer.length) {
        listadoPorHacer = nuevoListadoPorHacer;
        guardarDB();
        return true;
    }
    return false;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}