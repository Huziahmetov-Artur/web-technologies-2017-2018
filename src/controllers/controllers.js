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
  res.send(getAllMovies());
}

const search = (req, res) => {
  Joi.validate(req.query, validation.searchSchema, (err, value) => {
    if (err) {
      res.status(400).json({
        status: 'Bad request',
        message: 'Missed query parameters'
      })
    } else {
      res.send(getMoviesByTitle(value.name));
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
      res.send(getSortedMovies(value.field, value.direction))
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
      res.send(getMoviesPage(value.from, value.to))
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
      res.send(getMovieById(value.id))
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
