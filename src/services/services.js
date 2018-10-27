import movies from '../assets/movies.json'
import { constants } from '../constants/constants'

function getAllMovies() {
  return movies.map(item => item.title)
}

function getSortedMovies(field, type) {
  return movies
    .slice()
    .sort((a, b) => {
      if (type.localeCompare(constants.sort.down)) {
        return a[field].toString().localeCompare(
          b[field], constants.sort.language, { numeric: true }
        )
      } else if (type.localeCompare(constants.sort.up)) {
        return b[field].toString().localeCompare(
          a[field], constants.sort.language, { numeric: true }
        )
      }
    })
    .map(item => item.title)
}

function getMoviesByTitle(movie) {
  const moviesRes = movies
    .filter(item =>
      item.title
        .toLowerCase()
        .includes(movie.toLowerCase())
    )
    .map(item => item.title);

  if(moviesRes[0]){
    return moviesRes;
  }
  return constants.notFound;
}

function getMoviesPage(offset, limit) {
  return movies
    .slice(Number(offset), Number(offset) + Number(limit))
    .map(item => item.title);
}

function getMovieById(id) {
  const moviesRes =  movies
    .filter(item => item.id === Number(id))
    .map(({ title, id }) => ({ title, id }));
  if(moviesRes[0]) {
    return moviesRes;
  }
  return constants.notFound;
}

export {
  getAllMovies,
  getSortedMovies,
  getMoviesByTitle,
  getMoviesPage,
  getMovieById
}
