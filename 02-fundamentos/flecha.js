// function sumar(a, b) {
//     return a + b;
// }

// let sumar = (a, b) => {
//     return a + b;
// }

let sumar = (a, b) => a + b;

let saludar = () => 'Hola mundo';

console.log(sumar(10, 20));
console.log(saludar());

//En funciones de fecha, this apunta a lo que valga this fuera de la funion de flecha
let persona = {
    nombre: "Pepe",
    apellidos: "Santana Suarez",
    dni: "45778146G",
    getNombre() { return `${this.nombre} ${this.apellidos}`; }

}

console.log(persona.getNombre());