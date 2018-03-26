/*
  Stores Objects

  extend this to work with an ORM or nosql db, etc

  NOTE: some promises used here
        just to indicate extendabity to blocking events when persistence layer is plugged

*/
export default class Store {
  constructor() {}

  init(itemClass) {
    this[itemClass] = [];
  }

  /**
   *
   * @param {*} itemClass  eg:- book
   * @param {*} object data
   */
  insert(itemClass, data) {
    return new Promise((resolve, reject) => {
      /* dummy promise here
       to consider async events when persistant layer is hooked up */
      try {
        if (!this[itemClass]) {
          this.init(itemClass);
        }
        this[itemClass].push(data);
      } catch (e) {
        reject(new Error(`error inserting data`));
      }
      resolve(1);
    });
  }

  remove(itemClass, params) {
    return this.find(itemClass, params, true);
  }

  /**
   *
   * @param {string} itemClass
   * @param {array of objects} params attributes to search for
   *        eg:-
                {
                  key: 'title',
                  value: title
                  matchCriteria : 'contains'
                }
   * @todo implement OR/AND criterias
   */
  find(itemClass, params, remove = false) {
    if (!Array.isArray(params)) {
      throw new Error(`${this.constructor.name} bad find parameter`);
    }
    let matches = 0;
    let itemRef;
    let found;
    return new Promise((resolve, reject) => {
      try {
        params.forEach(param => {
          let found = this[itemClass].findIndex(entry => {
            if (entry[param.key]) {
              switch (param.matchCriteria) {
                case "contains":
                  if (entry[param.key].match(param.value)) {
                    itemRef = entry;
                    return true;
                  }
                  break;
                case "equal":
                  if (entry[param.key] === param.value) {
                    itemRef = entry;
                    return true;
                  }
                  break;
              }
            }
          });
          if (found !== -1) {
            matches++;
          }
        });
        if (remove) {
          this[itemClass].splice(found, 1);
        }
        // all conditions matched, 'AND' for now
        if (matches === params.length) {
          resolve(itemRef);
        } else {
          resolve(null);
        }
      } catch (e) {
        reject(e)
      }
    });
  }
}
