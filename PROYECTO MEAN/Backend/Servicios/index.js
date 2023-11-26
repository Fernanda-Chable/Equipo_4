const express = require ('express');
const conectarDB = require('./config/db');
const cors = require("cors");
const dashboardRouter = require('./routes/dashboard');

// Creamos el servidor
const app = express();

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