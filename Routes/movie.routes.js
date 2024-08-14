const express = require('express');
const {createmovie,seemovie,Idgetmovie,updatemovie,deletemovie} = require('../Controllers/movieControllers');

const movieRouter = express.Router();

movieRouter.post('/create', createmovie);
movieRouter.get('/',seemovie);
movieRouter.get('/:movieID',Idgetmovie);
movieRouter.patch('/update/:movieID',updatemovie);
movieRouter.delete('/delete/:movieID',deletemovie);

module.exports = {movieRouter};
