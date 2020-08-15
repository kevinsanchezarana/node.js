let empleados = [{
        id: 1,
        nombre: "Kevin"
    },
    {
        id: 2,
        nombre: "Pepa"
    },
    {
        id: 3,
        nombre: "Pepe"
    }
];

let salarios = [{
        id: 1,
        salario: 1600
    },
    {
        id: 2,
        salario: 2000
    }
];

//Problema de callbacks encadenados. Se deben usar promesas para solucionar esto
//UNa de las diferencias entre los callback y promesas es que si disparas varias veces el mismo callback se ejcutará mientras si llamas al resolve/reject x veces solo se lanza 1
let getSalario = (empleado, callback) => {

    let salarioBD = salarios.find(salario => salario.id === empleado.id);

    if (!salarioBD) {
        return callback(`No existe el salario del empleado ${empleado.nombre}`);
    }

    let empleadoConSalario = {
        nombre: empleado.nombre,
        salario: salarioBD.salario
    }
    callback(null, empleadoConSalario);

}

let getEmpleado = (id, callback) => {

    let empleadoBD = empleados.find(empleado => empleado.id === id);

    if (!empleadoBD) {
        return callback(`No existe el empleado con id ${id}`);
    }

    callback(null, empleadoBD);

}

getEmpleado(20, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    console.log(empleado);

    getSalario(empleado, (err, empleadoConSalario) => {

        if (err) {
            return console.log(err);
        }
        console.log(empleadoConSalario);

    });


});