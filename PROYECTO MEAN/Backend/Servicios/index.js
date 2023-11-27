const express = require ('express');
const conectarDB = require('./config/db');
const cors = require("cors");


const bodyparser = require('body-parser');
// import routes
const admin = require('./routes/admin');
const verifyToken = require('./middleware/validate-token');

// Creamos el servidor
const app = express();

//Capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Conectamos a la BD
conectarDB();

//Habilitar CORS para todas las solicitudes
app.use(cors())

//Routes
app.use(express.json());
app.use('/api/reservas', require('./routes/reserva'));
app.use('/api/comentarios', require('./routes/comentario'));
app.use('/api/dashboard', require('./routes/dashboard'));
app.use('/api/dashboard', dashboardRouter);

app.use('/api/users', require('./routes/auth'));
// route middlewares
app.use('/api/admin', verifyToken, admin);

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})