# 📚 Practicando con TypeScript

En esta sección profundizaré en **TypeScript**, explorando aspectos fundamentales y avanzados para mejorar la calidad del código y aprovechar al máximo este poderoso lenguaje.

---

## 🚀 Contenido

- ✅ **Tipos Básicos:** Fundamentos esenciales sobre tipos primitivos.
- ✅ **Tipos Avanzados:** Uso de tipos complejos y personalizados.
- ✅ **Programación Orientada a Objetos:** Aplicación práctica de conceptos OOP.
- ✅ **Genéricos:** Creación de componentes reutilizables con tipos dinámicos.
- ✅ **Módulos:** Organización eficiente del código con módulos.
- ✅ **Integración con ReactJS:** Uso efectivo de TypeScript en proyectos React.
- ✅ **Decoradores:** Aplicación de decoradores para enriquecer clases y métodos.

---

## 🔧 Comandos útiles

**Inicializar configuración de TypeScript:**

```bash
tsc --init
```

> Genera automáticamente el archivo de configuración **tsconfig.json**.

**Configuración de lanzamiento en VSCode (`launch.json`):**

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Iniciar programa",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/src/index.ts",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "outFiles": ["${workspaceFolder}/**/*.js"]
    }
  ]
}
```

> La propiedad `preLaunchTask` permite compilar automáticamente antes de ejecutar el programa.

---

## 📌 Tipos de datos en TypeScript

- `any`: Evitar siempre que sea posible.
- `unknown`: Más seguro que `any`, requiere comprobaciones adicionales.
- `never`: Para funciones que nunca retornan un valor (por ejemplo, lanzan errores).
- `arrays`: Arreglos tipados.
- `tuplas`: Arreglos con una cantidad y tipos de elementos específicos.
- `enums`: Enumeraciones con conjuntos específicos de valores.
- **Inferencia de tipos**: TypeScript deduce automáticamente tipos.

### 🔹 Ejemplos clave

#### Tuplas

```ts
let tuplaEjemplo: [number, string, boolean] = [1, "Martin Gomez", true];

// También se pueden definir arreglos dentro de tuplas:
let tuplaConArray: [string, number[]] = ["Notas", [10, 9, 8]];
```

#### Enums

Útil para estados de carga o valores constantes:

```ts
enum Tallas {
  Chica = "s",
  Mediana = "m",
  Grande = "l",
  ExtraGrande = "xl",
}

// Uso eficiente en compilación con 'const enum':
const enum LoadingState {
  Idle,
  Loading,
  Success,
  Error,
}
```

> Al usar `const enum`, TypeScript sustituye valores directamente en la compilación.

#### Objetos tipados

Objetos con propiedades opcionales (`?`):

```ts
const usuario: { id: number; nombre?: string } = { id: 1 };

// 'nombre' es opcional y puede inicializarse posteriormente
usuario.nombre = "Martin";
```

> Alternativa más eficiente usando tipos personalizados:

```ts
type Direccion = {
  numero: number;
  calle: string;
  pais: string;
};

type Persona = {
  id: number;
  nombre?: string;
  talla: Tallas;
  direccion: Direccion;
};

const objeto: Persona = {
  id: 1,
  nombre: "martin",
  talla: Tallas.Chica,
  direccion: {
    numero: 123,
    calle: "calle falsa",
    pais: "mexico",
  },
};

// Arreglo tipado:
const arr: Persona[] = [];
```

Si se elimina el signo `?`, la propiedad se vuelve obligatoria.

---

## 🔸 Funciones

Ejemplos de definición de funciones tipadas:

```ts
const fn: (a: number) => number = (edad: number) => {
  return edad > 18 ? 1 : 0;
};

function validaEdad(edad: number, msj: string = "Hola pa"): string {
  return edad > 17 ? `puedes ingresar ${msj}` : "no puedes ingresar";
}
```

> Para mejorar la depuración activa estas opciones en `tsconfig.json`:

```json
"noUnusedParameters": true,
"noImplicitReturns": true
```

---

## Tipo de retorno never

- estas estan dedicadas es mandar errores nada mas

```ts
function errorUsuario(): never {
  throw new Error("Contraseña o correo incorrecta ");
}
```

> Se tiene que decir que siempre vamos a tirar un error para que asi no se puedan inyectar cosas a la base de datos

🎯 **Recomendaciones:**

- Evita abusar del tipo `any`. Siempre prioriza tipos precisos.
- Aprovecha la inferencia de tipos para simplificar el código.
- Usa `unknown` en situaciones de incertidumbre y valida antes de usar.
- Organiza claramente tu código con módulos para facilitar la escalabilidad y mantenimiento.
