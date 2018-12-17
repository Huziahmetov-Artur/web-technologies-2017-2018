import Sequelize  from 'sequelize';
import { sequelize, model } from '../db/index';

const Op = Sequelize.Op;

async function getAllMovies() {
  return await sequelize.sync().then(() => model.findAll())
}

async function getSortedMovies(field, type) {
  console.log(131)
  return await sequelize.sync().then(() => {
    return model.findAll({
      order: [[field, type]]
    })
  })
}

async function getMoviesByTitle(movie) {
  return await sequelize.sync().then(() => {
    return model.findAll({
      where: {
        title: {
          [Op.iLike]: '%' + movie + '%'
        }
      }
    })
  })
}

async function getMoviesPage(offset, limit) {
  return await sequelize.sync().then(() => {
    return model.findAll({
      offset: offset,
      limit: limit
    })
  })
}

async function getMovieById(id) {
  return await sequelize.sync().then(() => {
    return model.findByPk(id)
  })
}

export {
  getAllMovies,
  getSortedMovies,
  getMoviesByTitle,
  getMoviesPage,
  getMovieById
}
