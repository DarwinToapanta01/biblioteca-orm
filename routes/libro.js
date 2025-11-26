const express = require('express');
const router = express.Router();
const Libro = require('../models/libro');

//Obtener todos los libros
router.get('/', async (req, res) => {
    try {
        const libros = await Libro.find()
            .populate('autor', 'nombre nacionalidad')
            .populate('genero', 'nombre descripcion');

        res.json(libros);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: 'Error al obtener los libros' });
    }
});

//Obtener libro por ID
router.get('/:id', async (req, res) => {
    try {
        const libro = await Libro.findById(req.params.id)
            .populate('autor', 'nombre nacionalidad')
            .populate('genero', 'nombre descripcion');
        if (!libro) {
            return res.status(404).json({ error: 'Libro no encontrado' });
        }
        res.json(libro);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: 'Error al obtener el libro' });
    }
});

//Obtener libro por ID del autor
router.get('/autor/:id_autor', async (req, res) => {
    try {
        const { id_autor } = req.params;
        const libros = await Libro.find({ autor: id_autor });

        if (libros.length === 0) {
            return res.status(404).json({ error: 'No se encontraron libros para el autor especificado' });
        }
        res.json(libros);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: 'Error al obtener el libro' });
    }
});

//Obtener libro por ID del genero
router.get('/genero/:id_genero', async (req, res) => {
    try {
        const { id_genero } = req.params;
        const libros = await Libro.find({ genero: id_genero });
        if (libros.length === 0) {
            return res.status(404).json({ error: 'No se encontraron libros para el genero especificado' });
        }
        res.json(libros);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: 'Error al obtener el libro' });
    }
});

//Crear un libro
router.post('/', async (req, res) => {
    try {
        const { nombre, editorial, autor, genero } = req.body;
        const libro = await Libro.create({ nombre, editorial, autor, genero });
        res.status(201).json(libro);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: 'Error al crear libro' });
    }
});

//Actualizar un libro
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, editorial, autor, genero } = req.body;
        const libro = await Libro.findByIdAndUpdate(
            id,
            { nombre, editorial, autor, genero },
            { new: true }
        );
        if (!libro) {
            return res.status(404).json({ error: 'Libro no encontrado' });
        }
        res.json(libro);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: 'Error al actualizar libro' });
    }
});

//Eliminar un libro
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const libro = await Libro.findByIdAndDelete(id);
        if (!libro) {
            return res.status(404).json({ error: 'Libro no encontrado' });
        }
        res.status(204).end();
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: 'Error al eliminar libro' });
    }
});

module.exports = router;