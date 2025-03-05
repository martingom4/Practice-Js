import express from 'express'
import 'dotenv/config'
import router from './router'
import { conectDB } from './config/db'
const app = express()
conectDB()
//leer datos de los formularios
app.use(express.json())

app.use('/', router)


export default app
