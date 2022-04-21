# Breaking Bad App
Aplicación para listar y ver detalles de todos los personajes de las series.

## Puesta en marcha de la app:
 - Realizar un npm install del proyecto.
 - Ejecutar **npm run dev** para ejecutar el proyecto en modo desarrollo.
 - Ejecutar **npm run build** para ejecutar el proyecto en modo producción.


## Tecnologías frontend usadas:
 - **ReactJS**:Librería para crear la interfaces de usuario.
 - **Wouter**: He decidido usar este router porque es mas ligero en comparación con React-Router.
 - **TailwindCSS**: Para el estilo de la aplicación.
 - **Context**: He usado el context de React para realizar guardar la cadenas de idiomas en el estado.
 - **useReducer**: He usado el useReducer para los estado mas complejos de la app como listado de los personajes y detalles de los mismos.
 - **Eslint**: Para el estilo del código.
 - **React Testing Library**: Para realizar los tests.
 
## Organización de app:
  La estructura de la aplicación esta organizada en una carpeta llamada **src**, dentro de esta carpeta se encuentran las carpetas **Characters** (*en esta carpeta se encuentran todo los componentes de la lista de personajes*), **CharactersDetails**, **shared**(*En esta carpeta se encuentran todos los componentes y servicios que comparten los componentes.*).

  - **Characters**:
    - **index**: Componente que contiene la lista de personajes.
    - **CharactersReducer**: Reducer que contiene el estado de la lista de personajes.
    - **service**: En esta carpeta están las funciones que realizan llamas a la API.
    - **hooks**: En esta carpeta he guardado los customs hooks para realizar la llamadas a los personajes y devolver  { loading, data, error}.
    - **components**: En esta carpeta se encuentran los componentes que se usan en la lista de personajes.

- **CharactersDetails**:
    - **index**: Componente que contiene el detalle de un personaje.
    - **CharactersDetailsReducer**: Reducer que contiene el estado del detalle de un personaje.
    - **service**: En esta carpeta están las funciones que realizan llamas a la API.
    - **hooks**: En esta carpeta he guardado los customs hooks para realizar la llamadas a los personajes y devolver  { loading, data, error}.
    - **components**: En esta carpeta se encuentran los componentes que se usan en el detalle de un personaje.
    
- **Shared**:
    - **components**: En esta carpeta se encuentran los componentes que se usan en el header y footer.
    - **context**: En esta carpeta se encuentra el context que se usa para guardar la cadena de idioma.
    - **service**: En esta carpeta están las funciones que realizan llamas a la API.

## Futuras implementaciones:
- Implementar la búsqueda de personajes por nombre.