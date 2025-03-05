import express from 'express'
import router from './router'

const app = express()

//leer datos de los formularios
app.use(express.json())

app.use('/', router)


export default app
