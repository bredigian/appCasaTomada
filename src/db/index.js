import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("cart.db")
export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS cart (id TEXT PRIMARY KEY NOT NULL, name TEXT NOT NULL, quantity INTEGER NOT NULL, price INTEGER NOT NULL, total INTEGER NOT NULL, img TEXT);",
        [],
        () => resolve(),
        (_, err) => reject(err)
      )
    })
  })
  return promise
}

export const insertItemCart = (id, name, quantity, price, total, img) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO cart (id, name, quantity, price, total, img) VALUES (?, ?, ?, ?, ?, ?);",
        [id, name, quantity, price, total, img],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })
  return promise
}

export const getItems = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM cart",
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      )
    })
  })
  return promise
}

export const updateItemCart = (id, quantity, total) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE cart SET quantity=quantity + (?), total=(?) WHERE id=(?);",
        [quantity, total, id],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      )
    })
  })
  return promise
}

export const removeItem = (id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM cart where id=(?);",
        [id],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      )
    })
  })
  return promise
}

export const clearItems = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM cart",
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      )
    })
  })
  return promise
}
