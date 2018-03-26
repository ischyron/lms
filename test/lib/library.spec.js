import {Library} from "../../lib";
import Store from "../../shared/store";

import {expect} from 'chai';

describe("Library", () => {
  let library;
  beforeEach(() => {
    const store = new Store();
    library = new Library(store);
  });

  it("addBook", () => {
    library.addBook({
      id: "1",
      title: "On the Road",
      author: "Jack Kerouac"
    }).then((res) => {
      expect(res).to.be.not.null;
    })
  });

  it("addUser", () => {
    library.addUser({
        id: "1",
        name: "Denis",
        bookBorrowLimit: 3
      }).then((res) => {
      expect(res).to.be.not.null;
    })
  });

  it("SearchBook", () => {
    library.addBook({
      id: "1",
      title: "On the Road",
      author: "Jack Kerouac"
    }).then((res) => {
      expect(res).to.be.not.null;
      library.searchBook({
        title: "On the Road",
        author: "Jack Kerouac"
      }).then((res) => {
        expect(res).to.be.not.null;
      })
    })
  });

  // it("returnBook", () => {
  //   store.insert('book', {title: "Go"});
  //   store.remove('book', [{key: "title", value: "Go", matchCriteria: "equal"}])
  //   expect(store.find('book', [{key: "title", value: "Go", matchCriteria: "equal"}])).to.be.null;
  // });

});
