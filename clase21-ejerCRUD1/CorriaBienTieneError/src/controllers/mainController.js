const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
// ESTA LINEA ME DA ERROR
const controller = {
	index: (req, res) => {
		return res.render('index.ejs', {products: products})
	},
	search: (req, res) => {
		const name = req.query.name;

		if (name == undefined) {
			return res.render('results.ejs', {products: products, busqueda: ''});
		} else {		
			const resultado = products.filter((product)=>{
			return product.name.includes(name);
			});

			res.render('results.ejs', {products: resultado, busqueda: name});
		}
	},
};

module.exports = controller;
