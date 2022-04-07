const express = require('express')
const app = express()
const arvhivoBD = require('./conexion')

const rutaUsuario = require('./rutas/usuario')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/usuario', rutaUsuario)

app.get('/', (req, res) => {
   res.end('Bienvenidos al servidor NODE-JS')
})

//confuración del servidor
app.listen(5000, function(){
   console.log('El servidor NODE esta corriendo por primera vez en el puerto 5000')
})