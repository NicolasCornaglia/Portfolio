const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products');
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		res.render('detail');
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form');
	},
	
	// Create -  Method to store
	store: (req,res) => {
		let productoFormulario = req.body;
		console.log('req.file');
		console.log(req.file);
		let productoNuevo = {
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			image: req.file.filename
		}
		// 
		
		let productoNuevoJSON = JSON.stringify(productoNuevo); 
		/* hacer lo de trabajar con JSON para agregar un nuevo dato a un arreglo de los mismos, esta en un cap del playground */

		res.redirect('');
	},

	verify: (req, res, next) => {
		const file = req.file;
		if (!file) {
		  const error = new Error('Por favor seleccione un archivo')
		  error.httpStatusCode = 400;
		  return next(error)
		}
		res.send(file) 
	},

	// Update - Form to edit
	edit: (req, res) => {
		res.render('product-edit-form');
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;