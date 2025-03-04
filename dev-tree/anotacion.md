# Anotaciones para express para tener en cuenta
---

- Tenemos la sintaxis basica que es creando rutas como lo vimos en php
- Podemos crear scrips personalizados en package.json en la seccion de scripts

1. Alguna sintaxis a tener en cuenta al momento de crear el servidor en express
```js
const app = exprees()
app.listen(3000, () => {
    console.log('Servidos funcionando en el puerto 3000')
})
```
- Esto lo que hace es abrir un puerto

2. debemos de importar las librerias con cjs que es common js

3. Tenemos librerias que podemos usar en desarrollo pero no para produccion:
```bash
npm i --save-dev nodemon
```
- Esto lo que hace es crear un apartado de dependencias para desarrollo:

- Algunas librerias pueden ser:

    - Nodemon
    -
