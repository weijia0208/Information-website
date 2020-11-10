const FamilyData = require('../models/todo-family');
const db = require('../models/database.js');
var express = require('express');
var router = express.Router();

var familydata = new FamilyData();

router.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'text/plain; charset="utf-8"');
  familydata.getAll((err, datas) => {
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
  familydata.getOne(Snum, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).send(results);
  })
})

router.post('/insertone', (req, res) => {
  console.log(req.body);
  res.header('Access-Control-Allow-Origin', '*');
  var Snum = req.body.Snum,
      Fname = req.body.Fname,
      relationship = req.body.relationship,
      contact = req.body.contact;
  familydata.insertOne(Snum,Fname,relationship,contact, (err, results) => {
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
      Fname = req.body.Fname,
      relationship = req.body.relationship,
      contact = req.body.contact;
  familydata.updateone(Snum,Fname,relationship,contact, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).send(results);
  })
})

module.exports = router;
