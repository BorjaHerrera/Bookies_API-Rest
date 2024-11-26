## Bookies

## Descripción
“Este proyecto es una API REST para gestionar libros y autores, 
permitiendo realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) 
sobre ambos tipos de registros y relacionarlos entre sí de manera eficiente.


##Tecnologías utilizadas

Este proyecto fue desarrollado utilizando las siguientes tecnologías:
•	Node.js: Entorno de ejecución para JavaScript en el lado del servidor.
•	Express: Framework para construir la API REST de manera rápida y sencilla.
•	Mongoose: Biblioteca para interactuar con MongoDB, 
facilitando la definición de esquemas y la gestión de bases de datos NoSQL.
•	MongoDB: Base de datos NoSQL utilizada para almacenar la información de libros y autores.


##Iniciación del Proyecto con Seeds

El proyecto se inicializó con dos archivos seed, booksData y authorsData, 
que contienen datos iniciales para libros y autores, respectivamente.

Estos datos se gestionaron mediante los scripts booksSeeds y authorsSeeds, 
diseñados para poblar la base de datos con información inicial. 

Todos estos archivos se encuentran organizados dentro de la carpeta utils.

Esto facilita la carga inicial de datos en entornos de desarrollo o pruebas, 
asegurando que siempre exista contenido para probar las funcionalidades de la API.



## Características

## authorSchema ##

El esquema de autores tiene las siguientes configuraciones destacadas:

> Campo name
En el esquema de autores (authorSchema), este campo es obligatorio (required: true) 
y tiene la propiedad unique: true, 
lo que asegura que no se puedan duplicar nombres de autores en la base de datos. 
Esto garantiza la integridad de los datos al evitar errores como la existencia de registros duplicados.

> Campo books
En el esquema de autores (authorSchema), la propiedad books es un array de referencias (ObjectId) al modelo books. 
Esto permite asignar múltiples libros a un autor.
Cada vez que se crea o sube un libro a la API, 
puede asociarse al autor correspondiente, 
permitiendo realizar consultas como "obtener todos los libros de un autor" de manera eficiente.


## bookSchema ##

El esquema de libros cuenta con las siguientes características relevantes:

> Campo authors
En el esquema de libros (bookSchema),
> la propiedad authors es un array de referencias (ObjectId) al modelo authors.
Esto permite asociar un libro con uno o varios autores.
Es especialmente útil para gestionar libros coescritos.
Gracias a la configuración ref: 'authors',
se puede utilizar el método populate de Mongoose,
> para obtener detalles completos de los autores vinculados a cada libro.

> Campo category
Este campo es un array de cadenas (type: [String]) y es obligatorio (required: true).
Para mantener la consistencia en los datos,
utiliza un enum que define una lista de categorías permitidas.
Esto evita errores comunes,
como la creación de categorías con ligeras variaciones en los nombres
(e.g., "postapocalíptico" y "post-apocalíptico").



##Administración de categorías:

Aunque la lista de categorías puede ampliarse en el futuro, 
dicha acción está restringida al administrador del sistema. 
Esto asegura un control centralizado 
y evita modificaciones arbitrarias por parte de usuarios no autorizados.



## Endpoints de libros - (Books)

URL: http://localhost:3000/api/v1/books/

•	GET /
Obtiene una lista de todos los libros.

•	GET /:id
Obtiene un libro específico por su ID.

•	GET /category/:category
Obtiene todos los libros de una categoría específica.

•	GET /price/:price
Obtiene todos los libros con un precio igual o menor al especificado.

•	POST /
Crea un nuevo libro.

•	PUT /:id
Actualiza un libro específico por su ID.

•	DELETE /:id
Elimina un libro específico por su ID.



## Endpoints de autores - (Authors)

URL: http://localhost:3000/api/v1/authors/

•	GET /
Obtiene una lista de todos los autores.

•	GET /:id
Obtiene un autor específico por su ID.

•	GET /name/:name
Busca un autor por su nombre.

•	POST /
Crea un nuevo autor.

•	PUT /:id
Actualiza un autor específico por su ID.

•	DELETE /:id
Elimina un autor específico por su ID.



