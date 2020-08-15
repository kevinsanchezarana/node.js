let persona = {
    nombre: "Pepe",
    apellidos: "Santana Suarez",
    dni: "45778146G",
    getNombre: function() {
        return `${this.nombre} ${this.apellidos}`;
    }
}

let { nombre: nombrePila, apellidos, dni } = persona;

console.log(nombrePila, apellidos, dni);