// vamos a usar cjs commonjs que es con require
const exprees = require('express')


const app = exprees()
//routing
// siempre van a ser dos parametros req y res que es request y response
app.get('/', (req, res) => {
    res.send('Hola mundo')
})

app.get('/about', (req, res) => {

    res.send('aca se pondra acerca de mi')
})

app.get('/contact', (req, res) => {
    res.send('aca se pondra el contacto')
})


// con este modo siempre tenemos que actualizar el servidor cada vez que se agrega algo nuevo en el codigo

//para mitigar este problema podemos usar node --watch index.js
// o instalar nodemon npm install -g nodemon que es una libreria de desarrollo

app.listen(3000, () => {
    console.log('Servidos funcionando en el puerto 3000')
})




