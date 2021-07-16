const Libro = require('../models/libros.model');

const agregarLibro = async (nuevoLibro) => {
  let modelo = {
    titulo: nuevoLibro.titulo,
    descripcion: nuevoLibro.descripcion,
    publicacion: nuevoLibro.publicacion,
    autor: nuevoLibro.autor
  }
  const libroGuardado = await new Libro(modelo).save();
  console.log('libroGuardado->', libroGuardado);
  return libroGuardado;
}

const obtenerLibros = async () => {
  let libros = await Libro.find({}).exec();
  return libros;

}

const actualizarLibro = async (titulo) => {
  let libro = await Libro.findOneAndUpdate(
    { titulo },
    { titulo: 'biblia' },
    { new: true }
  ).exec()
  return libro
}
  

module.exports = { agregarLibro, obtenerLibros, actualizarLibro }