const express = require('express');
const router = express.Router();
const Genero = require('../models/genero');

// Obtener todos los generos
router.get('/', async (req, res) => {
    try {
        const generos = await Genero.find(); 
        res.json(generos);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: 'Error al obtener los generos' });
    }
});

// Obtener genero por id
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const genero = await Genero.findById(id); 
        if (!genero) {
            return res.status(404).json({ error: 'Genero no existe' });
        }
        res.json(genero);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: 'Error al obtener el genero' });
    }
});


//Crear un genero
router.post('/', async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        const genero = await Genero.create({ nombre, descripcion });
        res.status(201).json(genero);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: 'Error al crear genero' });
    }
});

//Actualizar un genero
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;
        
        const genero = await Genero.findByIdAndUpdate(
            id, 
            { nombre, descripcion }, 
            { new: true }
        );
        if (!genero) {
            return res.status(404).json({ error: 'Genero no existe' });
        }
        res.json(genero);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: 'Error al actualizar genero' });
    }
});

//Eliminar un genero
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const genero = await Genero.findByIdAndDelete(id);
        if (!genero) {
            return res.status(404).json({ error: 'Genero no existe' });
        }
        res.json({ message: `Genero con id ${id} eliminado correctamente` });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: 'Error al eliminar genero' });
    }
});

module.exports = router;