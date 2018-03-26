export default class User {
  constructor(id, name, bookBorrowLimit = 2) {
    this.id  = id;
    this.name  = name;
    this.bookBorrowLimit = bookBorrowLimit;
  }
}
