const LearnData = require('../models/todo-learn');
const db = require('../models/database.js');
var express = require('express');
var router = express.Router();

var learndata = new LearnData();

router.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'text/plain; charset="utf-8"');
  learndata.getAll((err, datas) => {
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
  learndata.getOne(Snum, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).send(results);
  })
})

router.post('/insertone', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  console.log(req.body);
  var Snum = req.body.Snum,
      period = req.body.period,
      school = req.body.school,
      witness = req.body.witness;
  learndata.insertOne(Snum,period,school,witness, (err, results) => {
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
      period = req.body.period,
      school = req.body.school,
      witness = req.body.witness;
  learndata.updateone(Snum,period,school,witness, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).send(results);
  })
})

module.exports = router;
