
const { Schema, model } = require('mongoose')

const libroSchema = new Schema({
  titulo: {
    type: String,
    required: true
  },
  description: String,
  publicacion: String,
  autor: String
})

module.export = model('libro', libroSchema);