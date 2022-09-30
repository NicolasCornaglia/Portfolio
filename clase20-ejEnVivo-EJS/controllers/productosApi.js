const productosData = require('../src/data/productosData');

const productos = {
   listar: (req,res) => {
      res.status(200).send(productosData);
   },
   obtenerPorId: (req,res) => {
      const productId = parseInt(req.params.id, 10);
      let productoEncontrado; 
      
      for (let i=0; i<productosData.length; i++) {
         if (productosData[i].id === productId) {
            productoEncontrado = productosData[i];
         }
      }
      // si no se encuentra ningun producto
      if (!productoEncontrado) {
         res.status(404).send();
      } 
      else {
         res.status(200).send(productoEncontrado);
      }

   },
   agregarProducto: (req,res) => {
      res.status(201).send('Se ha creado un producto');
   },
   borrarProducto: (req,res) => {
      const productId = parseInt(req.params.id, 10);
      for (let i=0; i<productosData.length; i++) {
         if (productosData[i].id === productId) {
            productosData.splice(i,1);
         }
      }

      console.log(productosData);
   
      res.send(`Se ha borrado el producto con id ${productId}`);
   }
}

module.exports = productos;