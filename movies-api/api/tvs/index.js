import express from 'express';
import tvModel from './tvModel';
import asyncHandler from 'express-async-handler';


const router = express.Router(); 


router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    const totalDocumentsPromise = tvModel.estimatedDocumentCount(); //Kick off async calls
    const tvsPromise = tvModel.find().limit(limit).skip((page - 1) * limit);

    const totalDocuments = await totalDocumentsPromise; //wait for the above promises to be fulfilled
    const tvs = await tvsPromise;

    const returnObject = { page: page, total_pages: Math.ceil(totalDocuments / limit), total_results: totalDocuments, results: tvs };//construct return Object and insert into response object

    res.status(200).json(returnObject);

    
}));
// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const tv = await tvModel.findByMovieDBId(id);
    if (tv) {
        res.status(200).json(tv);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));



router.post('/:id/rating', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const upcoming = await tvModel.findByMovieDBId(id);
    const rating = req.body.rating
    console.log(rating)
   await upcoming.rating.push(rating)
   await upcoming.save(); 
   res.status(201).json(upcoming); 
}));



export default router;