
let mongodb=require("mongodb");
let sambaIt=mongodb.MongoClient;
let Employee=require("express").Router().get("/",(req,res)=>{
sambaIt.connect("mongodb://localhost:27017/miniprojectdb",(err,db)=>{
    if(err){
        throw err;
    }else{
        db.collection("employees").find().toArray((err,array)=>{
          if(err) throw err;
          else{
              res.send(array);
          }
        })
    }
})
})
module.exports=Employee;