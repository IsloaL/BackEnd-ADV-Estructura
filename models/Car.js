import mongoose, { model } from "mongoose";

/** QUÉ NECESITAMOS PARA HACEWR UN MODELO CON MONGOOSE
 * 1.- Crear un schema (esqueleto)
 * 2.- Crear modelo, asignando un nombre
 */
//1
const carSchema = new mongoose.Schema({
    plate: {
        type: String,
        required: true
    },
    model: String,
    brand: String,
    version: String,
    color: String,
    carType: String,
    vin: String,
    prueba: String
}); //lo que va entre paréntesis son los campos (tipo de dato) que contendrá 

//2
// NOTA: el nombre del modelo debe de ser con mayúscula y en singular
//const Car = mongoose.model();

/*
export {carSchema, Car}; //esto se hace cuando se van a exportar distintas cosas, cuando sólo es una, se puede hacer lo siguiente
export default Car oooo también se podría de la siguiente manera
*/

export default mongoose.model('Car', carSchema);