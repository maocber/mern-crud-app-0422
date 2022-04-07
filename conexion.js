const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crudmernstack');

const objetobd = mongoose.connection

objetobd.on('connected', () => {
    console.log('Se conecto a Mongo DB')
})

objetobd.on('error', () => {
    console.log("Error al conectar con la BDs")
})

module.exports = mongoose