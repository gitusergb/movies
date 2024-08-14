const {Movie_model}= require('../Models/Movie');


//post
const createmovie = async (req, res) => {
  try { 
const movie = new Movie_model(req.body)
await movie.save()
res.status(200).json({ msg:'A new movie has been Created',movie:movie});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


//get
const seemovie =async( req ,res)=>{
    try { 
        const movies = await Movie_model.find();
        res.status(200).send(movies);
          } catch (error) {
            res.status(400).send({ error: error.message });
          }

}


//get_movie_by_id
const Idgetmovie =async( req ,res)=>{
  const {movieID}=req.params
    try { 
        const movie = await Movie_model.findOne({_id:movieID})
        if(movieID){
          res.status(200).send(movie);}
        } catch (error) {
          res.status(400).send({ error: error.message });
        }

}
//update/patch
const updatemovie =async(req ,res)=>{
const {movieID}=req.params
    try { 
        const movie = await Movie_model.findOne({_id:movieID})
        if(movieID){
       await Movie_model.findByIdAndUpdate({_id:movieID},req.body)
       res.status(200).send({ msg:`movie with Id:${movieID} has been updated`});}
       else{
        res.status(400).send({ msg:`You are not Authorised`});}
       
          } catch (error) {
            res.status(400).send({ error: error.message });
          }

}


//delete
const deletemovie =async(req ,res)=>{
    const {movieID}=req.params
        try { 
            const movie = await Movie_model.findOne({_id:movieID})
            if(movieID){
           await Movie_model.findByIdAndDelete({_id:movieID})
           res.status(200).send({ msg:`movie with Id:${movieID} has been deleted`});}
           else{
            res.status(400).send({ msg:`You are not Authorised`});}
           
              } catch (error) {
                res.status(400).send({ error: error.message });
              }
    
    }

module.exports = {createmovie,seemovie,Idgetmovie,updatemovie,deletemovie};