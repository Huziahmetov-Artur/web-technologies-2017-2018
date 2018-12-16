import Joi from 'joi'
import {
  getAllMovies,
  getSortedMovies,
  getMoviesByTitle,
  getMoviesPage,
  getMovieById
} from '../services/services'
import { validation } from './validationSchemas'

const all = async (req, res) => {
  res.send(await getAllMovies())
}

const search = async (req, res) => {
  await Joi.validate(req.query, validation.searchSchema, async (err, value) => {
    if (err) {
      res.status(400).json({
        status: 'Bad request',
        message: 'Missed query parameters'
      })
    } else {
      res.send(await getMoviesByTitle(value.name));
    }
  })
}

const sort = async (req, res) => {
  await Joi.validate(req.query, validation.sortSchema, async (err, value) => {
    if (err) {
      res.status(400).json({
        status: 'Bad request',
        message: 'Invalid query parameters'
      })
    } else {
      res.send(await getSortedMovies(value.field, value.direction))
    }
  })
}

const page = async (req, res) => {
  await Joi.validate(req.query, validation.pageSchema, async (err, value) => {
    if (err) {
      res.status(400).json({
        status: 'Bad request',
        message: 'Invalid query parameters'
      })
    } else {
      res.send(await getMoviesPage(value.from, value.to))
    }
  })
}

const id = async (req, res) => {
  await Joi.validate(req.params, validation.idSchema, async (err, value) => {
    if (err) {
      res.status(400).json({
        status: 'Bad request',
        message: 'Invalid query parameters'
      })
    } else {
      res.send(await getMovieById(value.id))
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
