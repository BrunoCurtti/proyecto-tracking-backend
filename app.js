require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.APP_PORT || 3004;
// Importación de routes
const routes = require('./routes');
const cors = require('cors');

// Le decimos a express que vamos a utilizar json para req y res.
app.use(express.json());

app.use(cors());
// Defino mis rutas
app.use('/', routes);


// Iniciar la app en el puerto indicado en la const port
app.listen(port, () => {
    console.log(`La app se ejecuta en el http://localhost:${port}`);
})