const db = require('./database.js');

class SignData {
  //检测用户名是否重复
  checkName(name, callback) {
    const sql = 'SELECT COUNT(*) sunum  FROM user WHERE username = ?';
    db.query(sql, [name], (err, result) => {
      if (err) {
        callback(true);
        return;
      }
      callback(false, result);
    });
  }
}

module.exports = SignData;
