import mongoose from './db'

const Schema = mongoose.Schema;

// Define collection and schema for Games
let Lab10 = new Schema({
  vote_count: {
    type: Number
  },
  id: {
    type: Number
  },
  video: {
    type: Boolean
  },
  vote_average: {
    type: Number
  },
  title: {
    type: String
  },
  popularity: {
    type: Number
  },
  poster_path: {
    type: String
  },
  original_language: {
    type: String
  },
  original_title: {
    type: String
  },
  genre_ids: {
    type: Array
  },
  backdrop_path: {
    type: String
  },
  adult: {
    type: Boolean
  },
  overview: {
    type: String
  },
  release_date: {
    type: String
  }
},{
  collection: 'lab10'
});

module.exports = mongoose.model('Films', Lab10);
