const express = require('express');
const router = express.Router();
const Autor = require('../models/autor');

// Obtener todos los autores
router.get('/', async (req, res) => {
    try {
        const autores = await Autor.find(); 
        res.json(autores);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: 'Error al obtener los autores' });
    }
});

// Obtener autor por id
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const autor = await Autor.findById(id); 
        if (!autor) {
            return res.status(404).json({ error: 'Autor no existe' });
        }
        res.json(autor);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: 'Error al obtener el autor' });
    }
});


//Crear un autor
router.post('/', async (req, res) => {
    try {
        const { nombre, nacionalidad } = req.body;
        const autor = await Autor.create({ nombre, nacionalidad });
        res.status(201).json(autor);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: 'Error al crear autor' });
    }
});

//Actualizar un autor
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, nacionalidad } = req.body;
        const autor = await Autor.findByIdAndUpdate(
            id, 
            { nombre, nacionalidad }, 
            { new: true }
        );
        if (!autor) {
            return res.status(404).json({ error: 'Autor no existe' });
        }

        res.json(autor);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: 'Error al actualizar autor' });
    }
});

//Eliminar un autor
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        const autor = await Autor.findByIdAndDelete(id);

        if (!autor) {
            return res.status(404).json({ error: 'Autor no existe' });
        }
        
        res.json({ message: `Autor con id ${id} eliminado correctamente` });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: 'Error al eliminar autor' });
    }
});

module.exports = router;