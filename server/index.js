//Importa express
const express = require('express');
//Importa las variables de entorno
require('dotenv').config({path: 'variables.env'});
//Importa el Router
const routes = require('./routes');

//Crea el servidor
const app = express();

//Habilita routing
app.use('/', routes());

//Asigna host
const host = process.env.HOST || '0.0.0.0';
//Asigna puerto
const port = process.env.PORT || 3000;

//Arranca servidor
app.listen(port, host, () => {
    console.log(`Servidor iniciado en ${host} : ${port}`);
});