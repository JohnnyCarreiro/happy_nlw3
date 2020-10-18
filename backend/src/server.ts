import express from 'express'
import path from 'path'
import cors from 'cors'
import 'express-async-errors'

import './database/connection'

import routes from './routes'
import errorHandler from './errors/handler'



const app = express()
// app.use(cors({
//     origin://add here the front-end ip address
// }))
app.use(cors())
app.use(express.json())
app.use(routes)

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.use(errorHandler)


const port = 3333

app.listen(port)