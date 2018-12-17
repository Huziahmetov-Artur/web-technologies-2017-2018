import movies from '../assets/movies.json'
import { constants } from '../constants/constants';
import Films from '../db/index';


function getAllMovies(res) {
  Films.find({}).then(movies => {
    res.json(movies)
  })
}

function getSortedMovies(field, type, res) {
  Films.find({})
    .sort([[field, type]])
    .then(sorted => res.json(sorted.map(item => item.title)))
}

function getMoviesByTitle(movie, res) {
  return Films.find({ title: new RegExp(movie, 'i') }).then(results => {
    return res.json(results.map(item => item.title))
  })
}

function getMoviesPage(offset, limit, res) {
  return Films.find()
    .limit(limit)
    .skip(offset)
    .then(response => res.json(response.map(item => item.title)))
}

function getMovieById(id, res) {
  Films.findOne({ id }).then(movie => {
    res.json(movie)
  })
}

export {
  getAllMovies,
  getSortedMovies,
  getMoviesByTitle,
  getMoviesPage,
  getMovieById
}
