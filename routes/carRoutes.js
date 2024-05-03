import express from 'express';
import {createCar} from '../controllers/carController.js'


const carRoutes = express.Router();

carRoutes.post('/cars', createCar);




export {carRoutes}; //también podría quedar como export default carRoutesdado que ahorita sólo es una sóla cosa
