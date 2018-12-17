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

const db = "mongodb://localhost:27017/lab10"

export const constants = {
  search,
  sort,
  page,
  notFound,
  db
}
