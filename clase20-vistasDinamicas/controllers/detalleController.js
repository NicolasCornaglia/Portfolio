const itemsData = require('../data/items');

const controller = {
   detalle: (req,res) => {
      return res.render('detalleMenu.ejs', {items: items})
   },
   obtenerPorId: (req,res) => {
      const itemId = parseInt(req.params.id, 10);
      let itemEncontrado; 
      
      for (let i=0; i<itemsData.length; i++) {
         if (itemsData[i].id === itemId) {
            itemEncontrado = itemsData[i];
         }
      }

      // si no se encuentra ningun producto
      if (!itemEncontrado) {
         res.status(404).send("No se encuentra el item");
      } 
      else {
         res.render("detalleMenu.ejs", {item: itemEncontrado});
      }
   }   
}

module.exports = controller;
