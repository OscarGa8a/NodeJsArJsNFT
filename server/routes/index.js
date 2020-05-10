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

    routes.get('/scripts/aframe-master.js', (req, res) => {
        res.sendFile(path.join(__dirname, '../scripts/aframe-master.js'));
    });

    routes.get('/scripts/aframe-ar-nft.js', (req, res) => {
        res.sendFile(path.join(__dirname, '../scripts/aframe-ar-nft.js'));
    });

    return routes;
}