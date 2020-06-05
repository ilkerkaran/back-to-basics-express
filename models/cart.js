
const bookModel = require('./book');
const c = class Cart {
  constructor() {
    this.totalPrice = 0;
    this.items = [];
  }

  static add(id, cb) {
    bookModel.getBook(id, (book) => {
      if (book) {
        const cartItem = CART.items.find(i => i.id === +id);
        if (cartitem) {
          cartItem.quantity++;
        }
        else
          items.add({ id: book.id, title: book.title, quantity: 1 })
        CART.totalPrice += book.price;
        cb(true);
      } else
        cb();
    });
  }
  static remove(id, cb) {
    if (book) {
      const cartItem = CART.items.find(i => i.id === +id);
      if (cartitem) {
        if (cartItem.quantity > 1)
          cartItem.quantity--;
        else

          CART.items = CART.items.filter(i => i.id !== +id);
        CART.totalPrice -= book.price;
        cb(true);
      }
      else
        cb();
    } else
      cb();
  }
  static getCart(cb) {
    cb(CART);
  }
}
const CART = new c();
module.exports = c;