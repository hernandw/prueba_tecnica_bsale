require('dotenv').config({path: '.env'})
const express = require('express');
const app = express();


// conexión a puerto
const PORT = process.env.PORT || 5000;


//Levantamiento del Servidor
app.listen(PORT, (req, res) =>{
    console.log(`Servidor activo on port: ${PORT}`);
})