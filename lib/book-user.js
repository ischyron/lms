export default class BookUser {
  constructor(bookId, userId) {
    if (!bookId || !userId) {
      throw new Error (`${this.constructor.name}: empty bookId/userId - bad association`);
    }
    this.bookId  = bookId,
    this.userId = userId;
  }
}
