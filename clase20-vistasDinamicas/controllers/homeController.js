const items = require('../data/items');

const controller = {
   home: (req,res) => {
      return res.render('home.ejs', {items: items})
   }
}

module.exports = controller;

