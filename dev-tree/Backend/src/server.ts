import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import router from './router'
import { conectDB } from './config/db'
import { corsConfig } from './config/cors'

conectDB()

const app = express()
//cors
app.use(cors(corsConfig))
//leer datos de los formularios
app.use(express.json())

app.use('/', router)


export default app
