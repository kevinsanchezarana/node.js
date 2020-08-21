const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

//Middleware para especificar cual es el directorio de recurso publicos
//Cualquier recurso que este bajo esta ruta puede ser accedido desde el navegador
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');
//Express hbs, motor de plantillas
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Kevin'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }....`);
});