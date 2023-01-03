import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const TvsSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  backdrop_path: { type: String },
  first_air_date: { type: String },
  overview: { type: String },

  name: { type: String },
  original_name: { type: String },
  genre_ids: [{ type: Number }],
  original_language: { type: String },
  popularity: { type: Number },
  vote_count: { type: Number },
  vote_average: { type: Number },
  production_countries: [{
    iso_3166_1: { type: String },
    name: { type: String }
  }],
  runtime: { type: Number },
  spoken_languages: [{
    iso_639_1: { type: String },
    name: { type: String }
  }],
  tagline: { type: String },
  rating: [{type: Number, ref: 'Tvs'}] 

});

TvsSchema.statics.findByMovieDBId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model('Tvs', TvsSchema);


