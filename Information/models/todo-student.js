const db = require('./database.js');

class StudentData {
  getAll(callback) {
    const sql = 'select * from student';
    db.query(sql,(err, res)=> {
      if(err) {
        callback(true);
        return ;
      }

      callback(false, res);
    })
  }
  getOne(Snum, callback) {
    const sql = 'SELECT * FROM student WHERE Snum = ?';
    db.query(sql, [Snum], (err, results) => {
      if (err) {
        callback(true);
        return;
      }
      callback(false, results);
    })
  }
  insertOne(Ssex, Sname, Sbirth, SID,STel,Snation,SDesc,callback) {
    const sql = 'INSERT INTO student (Ssex,Sname,Sbirth,SID,STel,Snation,SDesc) VALUES (?,?,?,?,?,?,?)'
    db.query(sql, [Ssex,Sname,Sbirth,SID,STel,Snation,SDesc], (err, results) => {
      if (err) {
        callback(true);
        return;
      }
      callback(false, results);
    })
  };

  updateone(Snum,Ssex,Sname,Sbirth,SID,STel,Snation,SDesc,callback) {
    const sql = 'UPDATE student SET Ssex = ? , Sname = ? , Sbirth = ? , SID = ?, Snation = ?, SDesc = ? WHERE Snum = ?'
    db.query(sql, [Ssex,Sname,Sbirth,SID,STel,Snation,SDesc,Snum], (err, results) => {
      if (err) {
        callback(true);
        return;
      }
      callback(false, results);
    })
  }
}

module.exports = StudentData;
