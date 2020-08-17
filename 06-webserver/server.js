const express = require('express');
const app = express();

//Middleware para especificar cual es el directorio de recurso publicos
//Cualquier recurso que este bajo esta ruta puede ser accedido desde el navegador
app.use(express.static(__dirname + '/public'));

//Express hbs, motor de plantillas
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Kevin',
        anyo: new Date().getFullYear()
    });
});

app.listen(8080, () => {
    console.log('Escuchando peticiones en el puerto 8080....');
});