import Sequelize from 'sequelize';
import { constants } from '../constants/constants';
import movies from '../assets/movies.json'

const sequelize = new Sequelize(
  constants.dbSettings.dbName,
  constants.dbSettings.dbLogin,
  constants.dbSettings.dbPassword,
  {
    host: constants.dbSettings.dbHost,
    dialect: constants.dbSettings.dbDialect
  }
)

const model = sequelize.define(
  'movies',
  {
    vote_count: {
      type: Sequelize.INTEGER
    },
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    video: {
      type: Sequelize.BOOLEAN
    },
    vote_average: {
      type: Sequelize.REAL
    },
    title: {
      type: Sequelize.TEXT
    },
    popularity: {
      type: Sequelize.REAL
    },
    poster_path: {
      type: Sequelize.TEXT
    },
    original_language: {
      type: Sequelize.TEXT
    },
    original_title: {
      type: Sequelize.TEXT
    },
    backdrop_path: {
      type: Sequelize.TEXT
    },
    adult: {
      type: Sequelize.BOOLEAN
    },
    overview: {
      type: Sequelize.TEXT
    },
    release_date: {
      type: Sequelize.TEXT
    }
  },
  {
    timestamps: false
  }
)

sequelize.sync()

export { sequelize, model }
