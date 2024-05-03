//requerimos imporrtar express para crear la API
// require e import es casi para lo mismo, la diferencia es que require es más viejo de acuerdo con ECMA S

/*en lugar de .then y .catch se emplea await y async seguido de su bloque try catch
*/

import {connect} from './config.js'; 
/**ECMA 6
 * import
 * 
 * export
 * 
 * 
 * import a from 'a'; cuando la importación no tiene las llaves importa cosas por default, lo cual se debe de establecer en la parte que se va a exportar con "export default" seguido de lo que se va a importar
 * 
 * import {a} from 'a'; esto es para importar un archivo en específico que se encuentra donde nosotros estamos estableciendo la ruta
 */
import express from "express";
/*pasos para crear la API
1.- Importar express
2.- Crear una app con express
3.- usar app.listen para abrir los puertos*/

import { carRoutes } from './routes/carRoutes.js';

connect();

const api = express();

api.use(express.json());

api.listen(8000, () => {
    console.log("API corriendo en puerto 8000");
});
//String (nombre de la ruta) y los parámetros del callback son request (todo lo que el frontend hace llegar para que lo responda el backend)= solicitud y response = la respuesta que va a generar 
api.get('/test', (req, res) => {
    res.send('Hola, esto es una prueba Ü');
});

api.use(carRoutes);