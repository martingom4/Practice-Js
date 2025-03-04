const exprees = require('express')
const app = exprees()


app.get('/', (req, res) => {
    res.send('Hola mundo')
})

app.get('/about', (req, res) => {

    res.send('aca se pondra acerca de mi')
})

app.get('/contact', (req, res) => {
    res.send('aca se pondra el contacto')
})

app.listen(3000, () => {
    console.log('Servidos funcionando en el puerto 3000')
})




