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
