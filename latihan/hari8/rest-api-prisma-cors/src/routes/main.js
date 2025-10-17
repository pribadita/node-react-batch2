const express = require('express')
const { createMovie, readMovie, readMovieById, updateMovie, deleteMovie} = require('../controllers/movieController')
const { basicAuth } = require('../middleware/basicAuth')
const { validationBodyMovies } = require('../middleware/validation')
const { createCategory, readCategory, readCategoryById, updateCategory, deleteCategory } = require('../controllers/categoryController')

const router = express.Router()

// MOVIE
router.post('/movie', basicAuth, validationBodyMovies, createMovie)
router.get('/movie', readMovie)
router.get('/movie/:id', readMovieById)
router.put('/movie/:id', basicAuth, updateMovie)
router.delete('/movie/:id', basicAuth, deleteMovie)

// CATEGORY
router.post('/category', basicAuth, createCategory)
router.get('/category', readCategory)
router.get('/category/:id', readCategoryById)
router.put('/category/:id', basicAuth, updateCategory)
router.delete('/category/:id', basicAuth, deleteCategory)


module.exports = router