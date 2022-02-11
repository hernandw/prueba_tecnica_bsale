# prueba_tecnica_bsale

#### Inicio del Proyecto

Para ejecutar el proyecto se pueden instalar todas las dependencias con el comando:

```
npm install
```

#### Instalación de dependencias:

Express: para ejecutar un servidor:

```
npm install --save express
```

Permite la conexión con mysql:

```
npm i mysql2
```

mysql-connection: permite hacer peticiones más rapidas entre express y mysql

```
npm i - mysql-connection
```

Morgan: permite ver las peticiones de los middleware
```
npm i morgan
```

Plantillas: se utilizará EJS, que te permite ealizarla con codigo de JS.

```
npm i ejs
```

Nodemon: permite ejecutar los cambios sin necesidad de reiniciar el servidor manualmente. Se le agrega -D porque es una dependencia de desarrollo.

```
npm i nodemon -D
```

Se utilizó la metodologia MVC (Modelo Vista Conytrolador)

El backend se guardó en la carpeta src

Las vistas se hicieron con el motor de plantilla EJS.

Los modelos no se realizaron porque se conectó  a la BBDD de datos proporcionada.

Se hizo deploy en heroku shoppingbsale.herokuapp.com/
Se actualizó en repositorio de github: https://github.com/hernandw/prueba_tecnica_bsale