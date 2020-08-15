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

//Mejora el uso de promesas y callbacks. 
//Con async el resultado de la funcion siempre es una promesa. El resolve es el return y la excepcion es el resolve.
//Con await podemos lanzar dentro de funciones async otras promesas de forma sincrona

let getEmpleado = async id => {
    let empleadoBD = empleados.find(empleado => empleado.id === id);
    if (!empleadoBD) {
        throw new Error(`No existe el empleado con id ${id}`);
    }
    return empleadoBD;
}

let getSalario = async empleado => {
    let salarioBD = salarios.find(salario => salario.id === empleado.id);
    if (!salarioBD) {
        throw new Error(`No existe el salario del empleado ${empleado.nombre}`);
    }
    return empleadoConSalario = {
        nombre: empleado.nombre,
        salario: salarioBD.salario
    }
}

let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let empleadoConSalario = await getSalario(empleado);
    return `El empleado ${empleadoConSalario.nombre} tiene el salario de ${empleadoConSalario.salario}`;
}

getInformacion(1).then(mensaje => {
    console.log(mensaje);
}).catch(err => {
    console.log('Error: ', err);
})