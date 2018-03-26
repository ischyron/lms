import BookUser from "../../lib/book-user";
import {expect} from 'chai';

describe("Book User", () => {
  it("throws error with bad data", () => {
    expect(() => { new BookUser("", 1) }).to.throw();
  });
});
