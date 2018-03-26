import Store from "../../shared/store";
import {expect} from 'chai';

describe("Store shared layer", () => {
  let store;
  beforeEach(() => {
    store = new Store();
    store.init('book');
  });

  it("new itemclass", () => {
    expect(store).to.have.property('book');
  });

  it("insert an item", () => {
    expect(store.insert('book', {title: "go"})).to.be.a('promise');
  });

  it("find an item", () => {
    store.insert('book', {title: "Go"});
    store.find('book', [{key: "title", value: "Go", matchCriteria: "equal"}]).then((res) => {
        expect(res).to.be.not.null;
    });
  });

  it("remove an item", () => {
    store.insert('book', {title: "Go"});
    store.remove('book', [{key: "title", value: "Go", matchCriteria: "equal"}])
    store.find('book', [{key: "title", value: "Go", matchCriteria: "equal"}]).then((res) => {
        expect(res).to.be.null;
    });
  });

});
