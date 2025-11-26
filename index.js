const express = require('express');
const app = express();
const connectDB = require('./models/database'); 
const port = 3000;
const autor = require('./routes/autor');
const genero = require('./routes/genero');
const libro = require('./routes/libro');

app.use(express.json());

app.use('/autor', autor);
app.use('/genero', genero);
app.use('/libro', libro);

const start = async () => {
    try {
        await connectDB(); 
        console.log('Base de datos conectada');
        app.listen(port, () => {
            console.log(`Servidor escuchando en http://localhost:${port}`);
        });
    } catch (error) {
        console.error('No se pudo iniciar el servidor. Error: ', error);
    }
}

start();