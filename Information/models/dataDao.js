const db = require('./database.js');

let upDataTeachImg = function(Snum,photograph){
  let sql = `update student sest photograph = '${photograph}' where Snum = '${Snum}'`;
  db.query(sql,function(err,result){
    callback(err,result);
  })
}

exports.upDataTeachImg = upDataTeachImg;
