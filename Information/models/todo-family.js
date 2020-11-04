const db = require('./database.js');

class TodoFamily {
  getAll(callback) {
    const sql = 'select * from Family';
    db.query(sql,(err, res)=> {
      if(err) {
        callback(true);
        return ;
      }

      callback(false, res);
    })
  }
  getOne(Snum, callback) {
    const sql = 'SELECT * FROM Family WHERE Snum = ?';
    db.query(sql, [Snum], (err, results) => {
      if (err) {
        callback(true);
        return;
      }
      callback(false, results);
    })
  }
  insertOne(Snum,Fname,relationship,contact,callback) {
    const sql = 'INSERT INTO Family (Snum,Fname,relationship,contact) VALUES (?,?,?,?)'
    db.query(sql, [Snum,Fname,relationship,contact], (err, results) => {
      if (err) {
        callback(true);
        return;
      }
      callback(false, results);
    })
  };

  updateone(Snum,Fname,relationship,contact,callback) {
    const sql = 'UPDATE Family SET Fname = ? , relationship = ? , contact = ? WHERE Snum = ?'
    db.query(sql, [Fname,relationship,contact,Snum], (err, results) => {
      if (err) {
        callback(true);
        return;
      }
      callback(false, results);
    })
  }

}

module.exports = TodoFamily;
