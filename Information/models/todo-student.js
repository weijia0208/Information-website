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
    console.log(Snum);
    const sql = 'SELECT * FROM student WHERE Snum = ?';
    db.query(sql, [Snum], (err, results) => {
      if (err) {
        callback(true);
        return;
      }
      callback(false, results);
    })
  }
  insertOne(Snum,Ssex, Sname, Sbirth, SID,STel,Snation,SDesc,photograph,callback) {
    const sql = 'INSERT INTO student (Snum,Ssex,Sname,Sbirth,SID,STel,Snation,SDesc,photograph) VALUES (?,?,?,?,?,?,?,?,?)'
    db.query(sql, [Snum,Ssex,Sname,Sbirth,SID,STel,Snation,SDesc,photograph], (err, results) => {
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
