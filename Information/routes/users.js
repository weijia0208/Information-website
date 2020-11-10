const LoginData = require('../models/loginData.js');
const db = require('../models/database.js');
var express = require('express');
var router = express.Router();

var logindata = new LoginData();


router.post('/getone', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  var sid = req.body.Snum;
  var psw = req.body.password;
  console.log(req.body.Snum);
  logindata.getOne(sid, (err, results) => {
    if (err) {
      console.log(err);
      res.send(JSON.stringify({
        isLogin:false,
        msg:'错误',
        status:'101'
      }));
    }
    else if(results.length === 0){
      res.send(JSON.stringify({
        isLogin:false,
        status:'400',
        msg:'该用户不存在'
      }))
      return;
    }
    else{
      let password = ''+results[0].password;
      if(psw !==password){
        res.send(JSON.stringify({
          isLogin:false,
          status:'400',
          msg:'用户名密码错误'
        }))
      }else{
        res.send(JSON.stringify({
          data:{
            Snum:sid,
            password:psw
          },
          isLogin:true,
          status:'200',
          msg:'登陆成功'
        }))
      }
    }
  })
})

router.post('/insertone', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
    var Snum = req.body.Snum,
        password = req.body.password;
    logindata.insertOne(Snum,password, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).send(results);
  })
})

module.exports = router;

