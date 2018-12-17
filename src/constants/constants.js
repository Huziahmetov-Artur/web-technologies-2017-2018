const search = {
  title: ''
}

const sort = {
  field: 'title',
  up: 'up',
  down: 'down',
  language: 'en-ru'
}

const page = {
  offset: 0,
  limit: 5
}

const notFound = 'Sorry, no such film';

const dbSettings = {
  dbName: 'lab9',
  dbLogin: 'postgres',
  dbPassword: '38asetet',
  dbHost: '127.0.0.1',
  dbDialect: 'postgres'
}

export const constants = {
  search,
  sort,
  page,
  notFound,
  dbSettings
}
