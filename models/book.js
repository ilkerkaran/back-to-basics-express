const INITIAL_BOOKS = [
  {
    title: 'Fellowship of the Ring',
    author: 'J.R.R Tolkein',
    desc: 'Nice book',
    coverLink: 'https://cdnb.artstation.com/p/assets/images/images/016/975/581/large/james-tarrant-fellowship-final.jpg?1554186241'
  },
  {
    title: 'The Two Towers',
    author: 'J.R.R Tolkein',
    desc: 'Nice book',
    coverLink: 'https://cdna.artstation.com/p/assets/images/images/016/975/582/large/james-tarrant-two-towers-final.jpg?1554186204'
  },
  {
    title: 'Return of the King',
    author: 'J.R.R Tolkein',
    desc: 'Nice book', coverLink: 'https://cdnb.artstation.com/p/assets/images/images/016/975/583/large/james-tarrant-return-of-the-king-final.jpg?1554186207'
  }
]

module.exports = class Book {
  constructor() {

    this.title = title;
    this.desc = desc;
    this.coverLink = coverLink;
    this.author = author;
  }

  static getBooks() {
    return INITIAL_BOOKS;

  }
}