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

  getOne(SID, callback) {
    const sql = 'SELECT password FROM users WHERE SID = ?';
    db.query(sql, [SID], (err, results) => {
      if (err) {
        callback(true);
        return;
      }
      console.log(results)

      callback(false, results);
    });
  }
}

module.exports = LoginData;
