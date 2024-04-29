import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connect = () => {
    mongoose.connect(process.env.DB_URI)

    const connection = mongoose.connection; 
//callback es la función que siempre espera y devuelve una promesa
    connection.once('open', () => {
        console.log('Conexión a base de datos exitosa Ü');
    })

    connection.once('error', () => {
        console.error('Error al conectarse a la BD u_u');  //es ara reportar de mejor manera un error
    })

};


export {connect};