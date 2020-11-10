const db = require('./database.js');

class SignData {
  //检测用户名是否重复
  checkName(snum, callback) {
    const sql = 'SELECT COUNT(*) snum  FROM users WHERE snum= ?';
    db.query(sql,[snum], (err, result) => {
      if (err) {
        callback(true);
        return;
      }
      callback(false, result);
    });
  }
}

module.exports = SignData;
