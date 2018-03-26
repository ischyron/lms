export default class Book {
  constructor(id, title, author) {
    if (!id) {
      throw new Error(`${this.constructor.name}: empty book id`);
    }
    this.id  = id,
    this.title = title;
    this.author = author;
  }
}
