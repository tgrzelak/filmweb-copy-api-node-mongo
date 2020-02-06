const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/', async (req, res) => { 
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch(err) {
        res.json({message: err});
    }
}); 

router.post('/', async (req,res) => {
    const movie = new Movie({
        title: req.body.title,
        description: req.body.description,
        engTitle: req.body.engTitle,
        yearOfProduction: req.body.yearOfProduction,
        duration: req.body.duration,
        poster: req.body.poster
    });
    try {
        const savedMovie = await movie.save(); 
        res.json(savedMovie);
    } catch (err) {
        res.json({message: err});
    }
});

router.get('/:id', async (req,res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.json(movie); 
    } catch(err) {
        res.json({message: err});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const removedMovie = await Movie.deleteOne({_id: req.params.id});
        res.json(removedMovie);
    } catch (err) {
        res.json({message: err});
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const updateMovie = await Movie.updateOne(
            {_id: req.body.id} , {
            $set: {
                title: req.body.title,
                description: req.body.description,
                engTitle: req.body.engTitle,
                yearOfProduction: req.body.yearOfProduction,
                duration: req.body.duration,
                poster: req.body.poster
            }
        });
        res.json(updateMovie);
    } catch(err) {
        res.json({message: err});
    }
});

module.exports = router;