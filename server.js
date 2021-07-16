const express = require('express');
const app = express();
require('dotenv').config();
const { dbConnection } = require('./db/index');
//Middlewares globales
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { agregarLibro, obtenerLibros, actualizarLibro } = require ('./services/libros.service')

async function bootstrap() {
  dbConnection()
    .then(() => {
      app.listen(process.env.PORT, () => {
            console.log("Servidor Iniciado en el puerto " + process.env.PORT)
        })
    })
    .catch((err) => {
      console.log("NO Pude conectar a la base de datos")
    })
}

bootstrap();

//MANEJO DE ERRORES GENERALES
app.use((err, req, res, next) => {
    if (err) {
        console.log(err)
        if (!res.headersSent) {
            res.status(500).send("Error en el servidor: " + err.message)
        }
    }
    next();
})


app.post ('/libros', async (req, res) => {
  try {
    const libro = await agregarLibro (req.body)
    return res.status(200).json(libro);
  } catch (error) {
    return res.status(400).json(error);
  }
})

app.get('/libros', async (req, res) => {
  try {
    const libros = await obtenerLibros()
    return res.status(200).json(libros);
  } catch (error) {
    return res.status(400).json(error);
  }
})

app.put('/libros', async (req, res) => {
  try {
    console.log('entre');
    const libro = await actualizarLibro(req.query.titulo)
    return res.status(200).json(libro);
  } catch (error) {
    return res.status(400).json(error);
  }
})