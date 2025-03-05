# Anotaciones para express para tener en cuenta

---

- Tenemos la sintaxis basica que es creando rutas como lo vimos en php
- Podemos crear scrips personalizados en package.json en la seccion de scripts

1. Alguna sintaxis a tener en cuenta al momento de crear el servidor en express

```js
const app = exprees();
app.listen(3000, () => {
  console.log("Servidos funcionando en el puerto 3000");
});
```

    - Esto lo que hace es abrir un puerto

2. debemos de importar las librerias con cjs que es common js

3. Tenemos librerias que podemos usar en desarrollo pero no para produccion:

```bash
npm i --save-dev nodemon
```

- Esto lo que hace es crear un apartado de dependencias para desarrollo:

- Algunas librerias pueden ser:
  - Nodemon: para hacer la exposision en modo watch

#### Para eliminar cosas que se estan haciendo en un puerto

```bash
npx kill-port #el puerto a eliminar
```

### Activar ESM(ECMAScript Modules )

- En el package.json creamos una nueva linea
  > esto se puede ponser en el principio de el archivo debajo de name
  >
  > > Y para importar seria import modulo from 'nombre'

```json
"type": "module"
```

### Typescrip

- Typescrip es un codigo de desarrollo despues de que se compila en navegador se convierte en js

```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "rootDir": "./src/",
    "lib": ["ESNext"],
    "target": "ESNext",
    "moduleResolution": "NodeNext",
    "module": "NodeNext",
    "strict": false,
    "sourceMap": true,
    "esModuleInterop": true,
    "declaration": true
  },
  "include": ["src/**/*.ts"]
}
```

Aquí tienes una explicación detallada de cada opción en tu archivo `tsconfig.json` para TypeScript con Express:

---

### Explicación de `tsconfig.json`

```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "rootDir": "./src/",
    "lib": ["ESNext"],
    "target": "ESNext",
    "moduleResolution": "NodeNext",
    "module": "NodeNext",
    "strict": false,
    "sourceMap": true,
    "esModuleInterop": true,
    "declaration": true
  },
  "include": ["src/**/*.ts"]
}
```

## La configuracion completa de package.json es:

```json
{
  "name": "dev-tree",
  "version": "1.0.0",
  "description": "Primer proyecto con express y Typescript",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  },
  "author": "Martin Gomez 03/03/25",
  "license": "ISC",
  "dependencies": {
    "express": "^4.21.2"
  },
  "devDependencies": {
    "@types/express": "^5.0.0",
    "nodemon": "^3.1.9",
    "ts-node": "^10.9.2",
    "typescript": "^5.8.2"
  }
}
```

---

### **Resumen rápido**

| Opción             | Descripción                                            |
| ------------------ | ------------------------------------------------------ |
| `outDir`           | Carpeta de salida para los archivos compilados         |
| `rootDir`          | Carpeta donde están los archivos TypeScript originales |
| `lib`              | Versión de ECMAScript que TypeScript usará             |
| `target`           | Versión de JavaScript generada                         |
| `moduleResolution` | Método de resolución de módulos (usando NodeNext)      |
| `module`           | Tipo de módulo generado (NodeNext para soporte de ESM) |
| `strict`           | Controla reglas estrictas de TypeScript                |
| `sourceMap`        | Genera archivos `.map` para depuración                 |
| `esModuleInterop`  | Permite importar módulos CommonJS sin problemas        |
| `declaration`      | Genera archivos de tipos `.d.ts`                       |
| `include`          | Especifica qué archivos TypeScript deben compilarse    |

### Definicion de el esquema orm de moongose

## **Tipos de datos en Mongoose**

Mongoose proporciona varios tipos de datos para definir esquemas:

| Tipo       | Descripción                                                    |
| ---------- | -------------------------------------------------------------- |
| `String`   | Cadenas de texto (`"Hola"`, `"Usuario123"`)                    |
| `Number`   | Números enteros y decimales (`42`, `3.14`)                     |
| `Boolean`  | Valores `true` o `false`                                       |
| `Date`     | Fechas y horas (`new Date()`)                                  |
| `Array`    | Listas de valores (`["rojo", "verde", "azul"]`)                |
| `ObjectId` | Referencia a otro documento en la base de datos                |
| `Mixed`    | Cualquier tipo de dato (`{ cualquier: "cosa" }`)               |
| `Buffer`   | Datos binarios (imágenes, archivos)                            |
| `Map`      | Objeto con claves de tipo `String` y valores de cualquier tipo |

---

## **Ejemplo de tipos con opciones**

Aquí tienes ejemplos de cómo usar cada tipo con distintas configuraciones:

```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Campo obligatorio
    trim: true, // Elimina espacios en blanco al inicio y final
  },
  email: {
    type: String,
    required: true,
    unique: true, // Evita correos duplicados en la base de datos
    trim: true,
    lowercase: true, // Convierte todo el texto a minúsculas
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6, // Mínimo de caracteres
  },
  age: {
    type: Number,
    required: false,
    min: 18, // Edad mínima permitida
    max: 99, // Edad máxima permitida
  },
  isActive: {
    type: Boolean,
    default: true, // Valor por defecto si no se especifica
  },
  createdAt: {
    type: Date,
    default: Date.now, // Fecha actual por defecto
  },
  roles: {
    type: [String], // Array de strings
    enum: ["admin", "user", "editor"], // Solo permite estos valores
    default: ["user"],
  },
  profilePicture: {
    type: Buffer, // Almacena imágenes o archivos en formato binario
  },
  metadata: {
    type: mongoose.Schema.Types.Mixed, // Puede contener cualquier tipo de dato
  },
  preferences: {
    type: Map, // Objeto con claves dinámicas y valores de cualquier tipo
    of: String,
  },
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId, // Referencia a otro usuario
      ref: "User",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
```

---

## **Opciones de configuración de los campos**

En Mongoose, cada campo del esquema puede tener varias opciones:

| Opción      | Descripción                                                  |
| ----------- | ------------------------------------------------------------ |
| `type`      | Define el tipo de dato (`String`, `Number`, `Boolean`, etc.) |
| `required`  | Hace que el campo sea obligatorio (`true` o `false`)         |
| `unique`    | Garantiza que el valor sea único en la colección             |
| `trim`      | Elimina espacios en blanco al inicio y final del string      |
| `lowercase` | Convierte el texto a minúsculas                              |
| `uppercase` | Convierte el texto a mayúsculas                              |
| `default`   | Establece un valor predeterminado si no se proporciona uno   |
| `minlength` | Longitud mínima de un `String`                               |
| `maxlength` | Longitud máxima de un `String`                               |
| `min`       | Valor numérico mínimo permitido                              |
| `max`       | Valor numérico máximo permitido                              |
| `enum`      | Restringe los valores permitidos a una lista específica      |
| `validate`  | Permite definir funciones de validación personalizadas       |

---
