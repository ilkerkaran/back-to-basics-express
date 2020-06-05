
const bookModel = require('../models/book');
const utils = require('./utils');
module.exports.postAddProduct = (req, res) => res.send({ message: 'should post new product!' });

module.exports.getProducts = (req, res) => bookModel.getBooks((books) => {
  console.log('books', books)
  res.render('shop/shop', { siteTitle: "Book Shop!", activeNav: 'shop', products: books })

});

module.exports.getProduct = (req, res) =>
  bookModel.getBook(req.params.id, (book) => {
    if (book)
      res.render('shop/detail', { siteTitle: "Book Shop!", activeNav: 'shop', product: book });
    else
      utils.render404(res);
  });


module.exports.getAdminProducts = (req, res) => bookModel.getBooks((books) => res.render('admin/admin', { siteTitle: "Book Shop!", activeNav: 'admin', products: books }));
