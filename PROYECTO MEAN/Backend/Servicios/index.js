const express = require ('express');
const conectarDB = require('./config/db');
const cors = require("cors");
const dashboardRouter = require('./routes/dashboard');
//nuevas constantes nuevo
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

// Creamos el servidor
const app = express();

//app de vistas nuevo
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use('/assets', express.static(path.join(__dirname, 'assets')));

//utilizamos router nuevo
const router = require('./routes/dash');
app.use(router.routes);

// Conectamos a la BD
conectarDB();

app.use(cors())

app.use(express.json());
app.use('/api/reservas', require('./routes/reserva'));
app.use('/api/comentarios', require('./routes/comentario'));
app.use('/api/dashboard', require('./routes/dashboard'));
app.use('/api/dashboard', dashboardRouter);
app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})