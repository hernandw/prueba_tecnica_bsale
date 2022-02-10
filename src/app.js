require('dotenv').config({path: '.env'})
const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const customerRoutes = require('./routes/customer');




// Configuraciones
const PORT = process.env.PORT || 5000;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware
app.use(morgan('dev'));// ver las consultas en la consola
app.use(myConnection(mysql, {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    PORT: 3306,
    database: process.env.DB_DATABASE
}, 'single'));


//Rutas del servidor
app.use('/', customerRoutes);

//Static
app.use(express.static(path.join(__dirname, 'public')));

//Levantamiento del Servidor
app.listen(PORT, (req, res) =>{
    console.log(`Servidor activo on port: ${PORT}`);
})