
const bookModel = require('../models/book');

module.exports.postAddProduct = (req, res) => res.send({ message: 'should post new product!' });

module.exports.getProducts = (req, res) => res.render('shop', { siteTitle: "Book Shop!", activeNav: 'shop', products: bookModel.get });

module.exports.getAdminProducts = (req, res) => res.render('admin', { siteTitle: "Book Shop!", activeNav: 'admin' });
