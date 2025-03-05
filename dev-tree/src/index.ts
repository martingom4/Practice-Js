import express from 'express'

const app = express()


app.get('/', (req, res) => {
    res.send('Hola mundo con typescript')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Servidos funcionando en el puerto',port)
})




