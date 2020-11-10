const express = require('express');
var router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');

router.post('/avatar',multer().single('img'),(req,res)=>{
  console.log(req.file);
  let {buffer,mimetype} = req.file;
  let fileName = (new Date()).getTime()+parseInt(Math.random()*3435)+parseInt(Math.random()*6575);
  let fileType = mimetype.split('/')[1];
  let filePath = path.join(__dirname,'/public/avater')
  let apath = `http://39.96.1.58:3000/public/avater/${fileName}.${fileType}`;

  fs.writeFile(`public/avater/${fileName}.${fileType}`,buffer,(data)=>{
    if(data){
      res.send({err:0,msg:"上传失败"})
    }else{
      res.send({err:1,msg:"上传成功",imgPath:apath})
    }
  })
})

module.exports = router;
