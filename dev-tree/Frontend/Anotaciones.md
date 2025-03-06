# Desarrollo Frontend con React y Ts

---

- Navegacion interna

```tsx
import { link } from "react-router-dom";
<nav>
  <Link to="/auth/register">No tienes cuenta? Creala aca</Link>
</nav>;
```

> Esto lo que hace es tener mas performance al momento de navegar entre rutas internas no funciona si quiero linkear con rutas externas
>
> > El problema es que si esa ruta no existe no nos mandara un mensaje de error
