const INITIAL_BOOKS = [
  {
    id: 1,
    title: 'Fellowship of the Ring',
    author: 'J.R.R Tolkein',
    desc: 'Nice book',
    coverLink: 'https://cdnb.artstation.com/p/assets/images/images/016/975/581/large/james-tarrant-fellowship-final.jpg?1554186241',
    price: 10
  },
  {
    id: 2,
    title: 'The Two Towers',
    author: 'J.R.R Tolkein',
    desc: 'Nice book',
    coverLink: 'https://cdna.artstation.com/p/assets/images/images/016/975/582/large/james-tarrant-two-towers-final.jpg?1554186204',
    price: 10
  },
  {
    id: 3,
    title: 'Return of the King',
    author: 'J.R.R Tolkein',
    desc: 'Nice book', coverLink: 'https://cdnb.artstation.com/p/assets/images/images/016/975/583/large/james-tarrant-return-of-the-king-final.jpg?1554186207',
    price: 10
  }
]

module.exports = class Book {
  constructor(title, author, price, desc, coverLink) {

    this.id = Math.random().toString();
    this.title = title;
    this.desc = desc;
    this.coverLink = coverLink;
    this.author = author;
    this.price = price;
  }

  static getBooks(cb) {
    cb(INITIAL_BOOKS);
  }

  save() {
    const book = INITIAL_BOOKS.find(b => b.id === id);
    if (book) {
      book.title = this.title;
      book.author = this.author;
      book.price = this.price;
      book.desc = this.desc;
      book.coverLink = this.coverLink;
    }
    else {
      INITIAL_BOOKS.push(this)
    }
  }

  static getBook(id, cb) {
    const book = INITIAL_BOOKS.find(b => b.id === id);
    cb(book);

  }
}