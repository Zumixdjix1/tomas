const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');


require('dotenv').config();

const app = express(); // Inicializa o app


const db = require('./config/db');






app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));














app.get('/', (req, res) => res.render('index'));








// Inicializa o servidor
app.listen(5002, () => {
    console.log("Servidor iniciado na porta 5002");
});




