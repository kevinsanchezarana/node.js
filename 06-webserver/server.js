const express = require('express');
const app = express();

//Middleware para especificar cual es el directorio de recurso publicos
//Cualquier recurso que este bajo esta ruta puede ser accedido desde el navegador
app.use(express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
//     let salida = {
//         nombre: 'Kevin',
//         edad: 27,
//         url: '/'
//     }
//     res.send(salida);
// });

app.listen(8080, () => {
    console.log('Escuchando peticiones en el puerto 8080....');
});