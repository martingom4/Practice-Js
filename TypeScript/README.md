# Practicando con TypeScript

En esta sección, estaré profundizando en **TypeScript**, explorando diferentes aspectos que me ayudarán a mejorar mi código y a aprovechar al máximo este poderoso lenguaje.

## Contenido

- **Tipos Básicos:** Fundamentos de los tipos de datos primitivos.
- **Tipos Avanzados:** Exploración de tipos complejos y personalizados.
- **Programación Orientada a Objetos:** Aplicación de conceptos OOP en TypeScript.
- **Genéricos:** Creación de componentes reutilizables con tipos genéricos.
- **Módulos:** Organización y estructuración del código mediante módulos.
- **Integración con ReactJS:** Uso de TypeScript en aplicaciones React.
- **Decoradores:** Implementación y uso de decoradores para enriquecer clases y métodos.

## Comandos utilies

```bash
tsc -init
```

> Esto lo que hace es generar el archivo de configuracion de typescrip

- Launch.json

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Iniciar el programa",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}\\src\\index.ts",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "outFiles": ["${workspaceFolder}/**/*.js"]
    }
  ]
}
```

> se agrega _preLaunchTask_ para poder hacer el build de prueba

## Tipos de datos de Ts

- any: Es recomendado no usarlo
- unknown
- never
- arrays
- tuplas
- enums
- Tipos inferidos

## Tuplas

```ts
let tuplas :[ definimos los valores que tendra] = [1, 'Martin Gomez', bool]
```

> Podemos definir arreglos dentro de las tuplas ejemplo ** string[] **
