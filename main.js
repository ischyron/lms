import { Library } from "./lib";
import Store from "./shared/store";

const store = new Store();
const library = new Library(store);

/*eslint-disable no-console */
export default function main() {
  library
    .addBook({
      id: "1",
      title: "On the Road",
      author: "Jack Kerouac"
    })
    .then(res => {
      console.log("added book", res);
      library
        .addUser({
          id: "1",
          name: "Denis",
          bookBorrowLimit: 3
        })
        .then(res => {
          console.log("added user ", res);
          library
            .lendBook({
              bookId: "1",
              userId: "1"
            })
            .then(res => {
              console.log("book lended", res);
              library
                .returnBook({
                  bookId: "1",
                  userId: "1"
                })
                .then(res => {
                  console.log("book returned", res);
                });
              library.searchBook("Road", "Jack").then(res => {
                console.log("Book searched and found", res);
              });
              library.searchUser("Denis").then(res => {
                console.log("User searched and found", res);
              });
            });
        });
    });
}
/*eslint-enable no-console */

main();
