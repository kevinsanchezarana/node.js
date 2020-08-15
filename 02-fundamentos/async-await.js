//Forzamos a que el resturn sea una promesa y conincida con el resolve.
//Si queremos reject, con dar un error lo tendriamos
let getNombre = async() => {
    return 'Kevin';
};

console.log(getNombre());

let saludar = async() => {
    //Hacemos que dentro de una funcion async tengamos que esperar por otra promesa para continuar y la resuelve
    let nombre = await getNombre();
    console.log(nombre);
    return `Hola ${nombre}`;
}

saludar().then(resolve => {
    console.log(resolve);
}).catch(err => {
    console.log(`Error: ${err}`);
});