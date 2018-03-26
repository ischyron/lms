import Book from "../../lib/book";
import {expect} from 'chai';

describe("Book", () => {
  it("can initialize", () => {
    const book = new Book(1, "title", "author");
    expect(book).to.have.property('title');
  });

  it("throws error with bad data", () => {
    expect(() => { new Book("", "title", "author") }).to.throw();
  });
});
