const mongoose = require('mongoose');

const movieSchema =  mongoose.Schema({
    name: { type:String,required:true},
    release_date: { type:String},
    image_url: { type:String,required:true},
    iMDb_rating:{ type:Number,required:true},
    s_desc:{ type:String},
    l_desc:{ type:String},
},{
    versionKey:false
});

const Movie_model=mongoose.model('Movie', movieSchema);
module.exports = {Movie_model}