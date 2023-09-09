ngid//genre.controller.js


const Genre = require('../models/genre.model');


exports.findAllgenre = async(req,res)=>{
    const genres = await Genre.find();
    res.json(genres);
}




//genre.routes.js


const express = require('express')
const router = express.Router();
const genreController = require('../controllers/genre.controller');


router.get('/genre',genreController.findAllgenre);


module.exports = router;9:15 pm 