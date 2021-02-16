require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Gaston Khouri',
        titulo: 'Node | Express | HBS'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Gaston Khouri',
        titulo: 'Node | Express | HBS'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Gaston Khouri',
        titulo: 'Node | Express | HBS'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`La aplicación está escuchando en http://localhost:${port}`);
});