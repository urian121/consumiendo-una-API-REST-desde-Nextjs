# Consumiendo una API REST desde Next.js

Este proyecto muestra cómo consumir una API REST en Next.js utilizando el sistema de rutas de API en la carpeta `app`.

#### Resultado final

![](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/master/full-stack-laravel10-react-mysql-y-bootstrap.png)

## Requisitos

- Node.js instalado
- Tener instalado Next.js en su última versión.
- Editor de código, como VSCode.

##### Configuración de la API en Next.js

Paso 1: Crear una API Route

En Next.js, las API routes permiten crear endpoints como parte del proyecto. Para este proyecto, vamos a crear un archivo route.js en la carpeta app/api.

    Crea la carpeta app/api en el directorio raíz de tu proyecto.

    Dentro de app/api, crea un archivo llamado route.js y pega el siguiente código:

```jsx
// app/api/route.js
export async function GET(req) {
  let url_api = "https://reqres.in/api/users";
  const response = await fetch(url_api);
  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
```

Este archivo actúa como un endpoint de tipo GET en /api y hace una solicitud a una API externa (https://reqres.in) para obtener una lista de usuarios.

##### Paso 2: Crear un Componente React para Consumir la API

    Crea un archivo DataPage.js dentro de la carpeta app (o en cualquier otra parte donde desees colocar tu componente).
    Dentro de DataPage.js, agrega el siguiente código para consumir la API en el lado del cliente:

```jsx
"use client";
import { useEffect, useState } from "react";

function DataPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api"); // Llama a la API creada
      const result = await response.json();
      console.log(result); // Muestra los datos en la consola

      // Guarda los datos obtenidos
      setData(result.data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.first_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataPage;
```

Este componente usa useEffect para hacer la solicitud a la API tan pronto como se carga el componente y muestra los datos en una lista.

##### Paso 3: Mostrar el Componente en la Página

Abre el archivo app/page.js (o index.js si usas el sistema de páginas tradicionales) y reemplaza su contenido con el siguiente:

```jsx
import DataPage from "./DataPage";

export default function Home() {
  return (
    <div>
      <DataPage />
    </div>
  );
}
```

##### No olvidar hacer esta configuración para poder usar el componente Image de Next.js

```jsx
const nextConfig = {
  images: {
    domains: ["reqres.in"],
  },
};
```

#### Ejecutar el Proyecto

    npm run dev

### Expresiones de Gratitud 🎁

    Comenta a otros sobre este proyecto 📢
    Invita una cerveza 🍺 o un café ☕
    Paypal iamdeveloper86@gmail.com
    Da las gracias públicamente 🤓.

## No olvides SUSCRIBIRTE 👍
