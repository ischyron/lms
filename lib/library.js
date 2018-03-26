/* Collection of Books */
import Book from "./book";
import User from "./user";
import BookUser from "./book-user";

export default class Library {
  constructor(store) {
    this.store = store;
  }

  addBook(data) {
    return this.store.insert('book', new Book(data.id, data.title, data.author));
  }

  addUser(data) {
    return this.store.insert('user', new User(data.id, data.name, data.bookBorrowLimit));
  }

  lendBook(data) {
    return this.store.insert('bookUser', new BookUser(data.bookId, data.userId));
  }

  returnBook(data) {
    return this.store.remove('bookUser',
        [{
          key: 'bookId',
          value: data.bookId,
          matchCriteria : 'equal'
        },
        {
          key: 'userId',
          value: data.userId,
          matchCriteria : 'equal'
        }]);
  }

  /**
   * @param {*} author
   * @param {*} title
   */
  searchBook(author, title) {
    if (!author && !title) {
      throw Error(`${this.constructor.name}: Empty search paramaters`);
    }
    return this.store.find('book', [{
        key: 'title',
        value: title,
        matchCriteria : 'contains'
    },
    {
        key: 'author',
        value: author,
        matchCriteria : 'contains'
    },]);
  }

}
