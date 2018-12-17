import {
  getAllMovies,
  getSortedMovies,
  getMoviesByTitle,
  getMoviesPage,
  getMovieById
} from './services'

describe('Services tests', () => {
  test('get full array of movies', () => {
    const movies = getAllMovies();
    expect(movies).toBeDefined()
    expect(movies.length).toBe(15600)
  });
  test('sort movies by title', () => {
    const FIELD = 'title', TYPE = 'up';
    const movies = getSortedMovies(FIELD,TYPE);
    expect(movies).toBeDefined()
    expect(movies).toBeInstanceOf(Array)
  });
  test('get movie by title', () => {
    const NAME = 'Blade Runner';
    const movies = getMoviesByTitle(NAME);
    expect(movies).toBeDefined()
    expect(movies).toBeInstanceOf(Array)
  });
  test('get movies by pages', () => {
    const FROM = 2, TO = 10;
    const movies = getMoviesPage(FROM,TO);
    expect(movies).toBeDefined()
    expect(movies).toBeInstanceOf(Array)
  });
  test('get movies by id', () => {
    const ID = 299536;
    const movies = getMovieById(ID);
    expect(movies).toBeDefined()
    expect(movies).toBeInstanceOf(Array)
  });
})