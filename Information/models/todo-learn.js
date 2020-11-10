const db = require('./database.js');

class TodoLearn {
  getAll(callback) {
    const sql = 'select * from learningExp';
    db.query(sql,(err, res)=> {
      if(err) {
        callback(true);
        return ;
      }

      callback(false, res);
    })
  }
  getOne(Snum, callback) {
    const sql = 'SELECT * FROM learningExp WHERE Snum = ?';
    db.query(sql, [Snum], (err, results) => {
      if (err) {
        callback(true);
        return;
      }
      callback(false, results);
    })
  }
  insertOne(Snum,period,school,witness,callback) {
    const sql = 'INSERT INTO learningExp (Snum,period,school,witness) VALUES (?,?,?,?)'
    db.query(sql, [Snum,period,school,witness], (err, results) => {
      if (err) {
        callback(true);
        return;
      }
      callback(false, results);
    })
  };

  updateone(Snum,period,school,witness,callback) {
    const sql = 'UPDATE learningExp SET period = ? , school = ? , witness = ? WHERE Snum = ?'
    db.query(sql, [period,school,witness,Snum], (err, results) => {
      if (err) {
        callback(true);
        return;
      }
      callback(false, results);
    })
  }

}

module.exports = TodoLearn;
