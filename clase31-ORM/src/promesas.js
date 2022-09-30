let funcionesAsync = require('./funciones.js')

funcionesAsync.obtenerDatos()
   .then(function(resultado) {
      console.log(resultado)

      return funcionesAsync.filtrarMayoresDeEdad(resultado)
   })
   .then(function(filtrados) {
      console.log(filtrados)
   })
   .catch(function(error) {
      console.log(error)
   })