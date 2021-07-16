const libro = require('../models/libros.model');

const nuevoLibro = async (libro) => {
  let modelo = {
    titulo: libro.titulo,
    descripcion: libro.descripcion,
    publicacion: libro.publicacion,
    autor: libro.autor
  }
  const nuevoLibro = await new libro(modelo).save();
  return nuevoLibro;
}

const obtenerLibros = async () => {
  let libros = await libro.find({}).exec();
  return libros;

}

const actualizarLibro = async (titulo) => {
  let libro = await libro.findOneAndUpdate(
    { titulo },
    { titulo: 'biblia' },
    { new: true }
  ). exec ()
}
  

module.exports = { nuevoLibro, obtenerLibros, actualizarLibro }