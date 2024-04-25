//requerimos imporrtar express para crear la API
// require e import es casi para lo mismo, la diferencia es que require es más viejo de acuerdo con ECMA S

/*en lugar de .then y .catch se emplea await y async seguido de su bloque try catch
*/


import express from "express";
/*pasos para crear la API
1.- Importar express
2.- Crear una app con express
3.- usar apop.listen para abrir los puertos*/

const api = express();


api.listen(8000, () => {
    console.log("API corriendo en puerto 8000");
});

