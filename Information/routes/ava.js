let dao = require("../models/dataDao.js");

const express = require("express");
const fs = require("fs");
//cosnt bodyParser = require('body-parser');
const router = express.Router();

router.post('/',function(req,res){
  console.log(req.body)
  let imgData = req.body.imgData;
  if(imgData){
    let base64Data = imgData.replace(/^data:image\/\w+;base64,/,"");
    let dataBuffer = new Buffer.from(base64Data,'base64');

    let saveUrl = "./public/avater/"+(new Date()).getTime()+".png";
    fs.writeFile(saveUrl,dataBuffer,function(err){
      if(err){
        res.send(err);
      }else{
        dao.upDataTeachImg(
          req.body.teachID,saveUrl.slice(6),
          (err,result)=>{
            if(err){
              send(err);
            }else{
              res.send("1")
            }
          }
        )
      }
    })
  }
})

module.exports = router;
