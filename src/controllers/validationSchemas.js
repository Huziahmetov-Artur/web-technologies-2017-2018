import Joi from 'joi'
import { constants } from '../constants/constants'
import movies from '../assets/movies'

const sortSchema = Joi.object().keys({
  field: Joi.string().default(constants.sort.field),
  direction: Joi.string().default(constants.sort.up)
})

const searchSchema = Joi.object().keys({
  name: Joi.string().required()
})

const pageSchema = Joi.object().keys({
  from: Joi.number()
    .min(0)
    .max(movies.length - 1)
    .default(constants.page.offset)
    .integer(),
  to: Joi.number()
    .min(1)
    .max(movies.length)
    .default(constants.page.limit)
    .integer()
})

const idSchema = Joi.object().keys({
  id: Joi.number()
    .integer()
    .positive()
})

export const validation = {
  sortSchema,
  searchSchema,
  pageSchema,
  idSchema
}
