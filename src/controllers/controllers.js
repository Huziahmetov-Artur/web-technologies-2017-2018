import Joi from 'joi'
import {
  getAllMovies,
  getSortedMovies,
  getMoviesByTitle,
  getMoviesPage,
  getMovieById
} from '../services/services'
import { validation } from './validationSchemas'

const all = (req, res) => {
  getAllMovies(res);
}

const search = (req, res) => {
  Joi.validate(req.query, validation.searchSchema, (err, value) => {
    if (err) {
      res.status(400).json({
        status: 'Bad request',
        message: 'Missed query parameters'
      })
    } else {
      getMoviesByTitle(value.name, res);
    }
  })
}

const sort = (req, res) => {
  Joi.validate(req.query, validation.sortSchema, (err, value) => {
    if (err) {
      res.status(400).json({
        status: 'Bad request',
        message: 'Invalid query parameters'
      })
    } else {
      getSortedMovies(value.field, value.direction, res)
    }
  })
}

const page = (req, res) => {
  Joi.validate(req.query, validation.pageSchema, (err, value) => {
    if (err) {
      res.status(400).json({
        status: 'Bad request',
        message: 'Invalid query parameters'
      })
    } else {
      getMoviesPage(value.from, value.to, res)
    }
  })
}

const id = (req, res) => {
  Joi.validate(req.params, validation.idSchema, (err, value) => {
    if (err) {
      res.status(400).json({
        status: 'Bad request',
        message: 'Invalid query parameters'
      })
    } else {
      getMovieById(value.id, res)
    }
  })
}

export const controllers = {
  all,
  search,
  sort,
  page,
  id
}
