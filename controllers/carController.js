/**
 * diferencias entre function y arrow function
 * -las arrows 
 *      las puedes guardar directamente en una constante, lo que significa que es una expresión
 *      carece de contexto
 * 
 */
import Car from '../models/Car.js'

//CREATE


const createCar = (req, res) => {
    /**
 *  brand: 'Nissan',
    carType: 'Sedan',
    color: 'red',
    model: 'Tsuru',
    plate: '123-ABC',
    version: 'GSR 2000',
    vin: '684FTH684XFHXFGH864'
 */
    const newCar = Car.create(req.body);
    res.json(newCar)
};



//READ




//UPDATE




//DELETE


export {createCar};