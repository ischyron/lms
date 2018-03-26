import {Library} from "./lib";
import Store from "./shared/store";

const store = new Store();
const library = new Library(store);

/*eslint-disable no-console */
export default function main (method, data) {
  switch(method) {
    case 'addBook': {
      library.addBook(data).then((res) => {
        console.log(res);
      });
      break;
    }
    case 'addUser': {
      library.addUser(data).then((res) => {
        console.log(res);
      });
      break;
    }
    case 'lendBook': {
      library.lendBook(data).then((res) => {
        console.log(res);
      });
      break;
    }
    case 'returnBook': {
      library.returnBook(data).then((res) => {
        console.log(res);
      });
      break;
    }
    case 'searchBook': {
      library.searchBook(data).then((res) => {
        console.log(res);
      });
      break;
    }
    default:
      console.log("supply a method and data");
  }
}
/*eslint-enable no-console */

main('addBook', {
  id: "1",
  title: "On the Road",
  author: "Jack Kerouac"
});

main('addUser', {
  id: "1",
  name: "Denis",
  bookBorrowLimit: 3
});

main('lendBook', {
  bookId: "1",
  userId: "1"
});

main('searchBook', {
  author: "Jack",
  title: "Road"
});

main('returnBook', {
  bookId: "1",
  userId: "1"
});

