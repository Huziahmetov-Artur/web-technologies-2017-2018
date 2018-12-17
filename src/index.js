import express from 'express'
import dotenv from 'dotenv/config'
import routes from './routes'

const app = express()
app.use(routes)

const port = process.env.PORT

app.listen(port, console.log('Server started on port ' + process.env.PORT))

