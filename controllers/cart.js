const cartModel = require('../models/cart');
const bookModel = require('../models/book');
const utils = require('./utils');
module.exports.addToCart = (req, res, next) =>
  cartModel.add(req.body.id, (addRes) => {
    if (addRes)
      res.redirect('/shop/');
    else
      utils.render404(res);

  });

module.exports.getCart = (req, res, next) => cartModel.getCart((cartData) => res.render('shop/cart', { siteTitle: "Book Shop!", activeNav: 'cart', cart: cartData }));

module.exports.addToCart = (req, res, next) => cartModel.add(req.body.id, (addRes) => { });

module.exports.removeFromCart = (req, res, next) => cartModel.remove(req.body.id, (removeResult) => { });
