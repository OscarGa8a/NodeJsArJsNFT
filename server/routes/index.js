//Importa express
const express = require('express');
//Importa el Router de express
const routes = express.Router();
//Importa path
const path = require('path');

module.exports = () => {

    routes.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../views/inicio/index.html'));
    });

    routes.get('/arjs', (req, res) => {
        res.sendFile(path.join(__dirname, '../views/arjs/index.html'));
    });

    return routes;
}