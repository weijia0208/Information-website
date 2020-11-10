const db = require('./database.js');

class LoginData {
   getAll(callback) {
   const sql = 'SELECT * FROM users';
    var datas = [];
    db.query(sql, (err, results) => {
       if (err) {
        callback(true);
        return;
      }
      results.forEach((e) => {
        datas.push(e);
      });
      callback(false, datas);
    });
  };

  getOne(Snum, callback) {
    const sql = 'SELECT password FROM users WHERE Snum = ?';
    db.query(sql, [Snum], (err, results) => {
      if (err) {
      console.log(err);
        callback(true);
        return;
      }
      console.log(results)

      callback(false, results);
    });
  }

  insertOne(Snum,password,callback) {
    const sql = 'INSERT INTO users (Snum,password) VALUES (?,?)'
    db.query(sql, [Snum,password], (err, results) => {
      if (err) {
      console.log(err);
        callback(true);
        return;
      }
      callback(false, results);
    })
  }
}
module.exports = LoginData;
