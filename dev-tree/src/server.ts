import express from 'express'

const app = express()


app.get('/', (req, res) => {
    res.send('Hola mundo con typescript')
})


export default app 
