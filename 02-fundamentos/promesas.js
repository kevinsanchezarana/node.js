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

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoBD = empleados.find(empleado => empleado.id === id);

        if (!empleadoBD) {
            return reject(`No existe el empleado con id ${id}`);
        }

        resolve(empleadoBD);

    });

}

//Sin concatenar promesas
// getEmpleado(1).then(empleado => {
//         console.log(empleado);

//         getSalario(empleado).then(empleadoConSalario => {
//             console.log(empleadoConSalario);
//         }, err => console.log(err));

//     },
//     (err) => {
//         console.log(err);
//     }
// )

//Concatenando x promesas generadas de forma asincrona
getEmpleado(1).then(empleado => {
    return getSalario(empleado);
}).then(empleadoConSalario => {
    console.log(empleadoConSalario);
}).catch(err => {
    console.log(err);
})

let getSalario = empleado => {

    return new Promise((resolve, reject) => {

        let salarioBD = salarios.find(salario => salario.id === empleado.id);

        if (!salarioBD) {
            return reject(`No existe el salario del empleado ${empleado.nombre}`);
        }

        let empleadoConSalario = {
            nombre: empleado.nombre,
            salario: salarioBD.salario
        }
        resolve(empleadoConSalario);

    });

}