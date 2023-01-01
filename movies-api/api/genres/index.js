import express from 'express';
import Genres from './genresModel';
const router = express.Router();

router.get('/', async (req, res) => {
    const genres = await Genres.find();
    res.status(200).json(genres);
});

router.get('/:id', async (req,res) =>{
    const id = req.params.id
    const genre = await Genres.findById(id)
    if(genre){
        res.status(200).json(genre);
    }
    else{
res.status(404).json({status: 404, message: "Genre does not exist"})
    }
})



export default router;