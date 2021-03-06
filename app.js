// Requires
var express = require('express');
var mongose = require('mongoose');
var bodyParser = require('body-parser');

// Inicializar variables
var app = express();


//Body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



// Importa rutas
var appRotues = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');


// Conexion a la base de datos
mongose.connection.openUri('mongodb://localhost:27017/dpeiDB', ( err, res ) =>{

    if( err ) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m',' online');
})


//Rutas
app.use('/usuario', usuarioRoutes);
app.use('/login', loginRoutes);
app.use('/', appRotues);


// escuchar preticiones
app.listen(3000, ()=>{
  console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m',' online');
});