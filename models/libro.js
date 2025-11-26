const mongoose = require('mongoose');

const LibroSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    editorial: { type: String, required: true },

    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Autor',
        required: true
    },

    genero: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genero',
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Libro', LibroSchema);