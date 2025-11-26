const mongoose = require('mongoose');

const GeneroSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
}, {
    timestamps: true
});

module.exports = mongoose.model('Genero', GeneroSchema);