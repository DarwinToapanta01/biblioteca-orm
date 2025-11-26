# API RESTful: Gestión de Biblioteca

Este proyecto implementa una **API RESTful** para la gestión de datos de una biblioteca (Libros, Autores y Géneros). Utiliza **Express.js** en el *backend* y **MongoDB** como base de datos, gestionada por **Mongoose (ODM)**.

El trabajo principal de esta API es ofrecer las operaciones **CRUD** (Crear, Leer, Actualizar, Eliminar) para cada entidad, permitiendo la manipulación de los datos de forma estructurada.

---

## Configuración y Ejecución Rápida

Sigue estos tres pasos para obtener, instalar y ejecutar el proyecto en tu máquina local.

### 1. Clonar el Repositorio

Abre tu terminal (o Git Bash) y usa el siguiente comando para descargar el código del repositorio:

```bash
git clone [https://github.com/DarwinToapanta01/biblioteca-orm.git](https://github.com/DarwinToapanta01/biblioteca-orm.git)
cd biblioteca-orm
```
### 2. Instalar Dependencias
Instala todas las librerías de Node.js necesarias (Express, Mongoose, etc.) listadas en el package.json:
 ```bash 
 npm install
 ```
### 3. Ejecutar el Servidor
Asegúrate de que tu servidor MongoDB esté activo (usando la configuración predeterminada localhost:27017/biblioteca_orm). Luego, inicia la aplicación:
  ```bash 
 node index.js
 ```

Verificación: Si la ejecución es exitosa, el servidor estará escuchando en http://localhost:3000. Puedes empezar a probar las rutas con herramientas como Postman.