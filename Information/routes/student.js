const StudentData = require('../models/todo-student.js');
const db = require('../models/database.js');
var express = require('express');
var router = express.Router();

var studentdata = new StudentData();

router.get('/', (req, res) => {
  //res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'text/plain; charset="utf-8"');
  studentdata.getAll((err, datas) => {
    if (err) {
      console.error(err);
      return;
    }
    res.status(200).send(datas);
  });
});

router.post('/getone', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  var Snum = req.body.Snum;
  studentdata,getOne(Snum, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).send(results);
  })
})

router.post('/insertone', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  var Ssex = req.body.Ssex,
      Sname = req.body.Sname,
      Sbirth = req.body.Sbirth,
      SID = req.body.SID,
      STel = req.body.STel,
      Snation = req.body.Snation,
      SDesc = req.body.SDesc;
  studentdata.insertOne(Ssex,Sname,Sbirth,SID,STel,Snation,SDesc, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).send(results);
  })
})

router.post('/update', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  var Snum = req.bodu.Snum,
      Ssex = req.body.Ssex,
      Sname = req.body.Sname,
      Sbirth = req.body.Sbirth,
      SID = req.body.SID,
      STel = req.body.STel,
      Snation = req.body.Snation,
      SDesc = req.body.SDesc
  studentdata.updateone(Snum,Ssex,Sname,Sbirth,SID,STel,Snation,SDesc, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).send(results);
  })
})

module.exports = router;
