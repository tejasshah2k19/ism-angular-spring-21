const express = require("express")
const mongoose = require("mongoose")
const routes = require("./api-routes")
//json 
//urlencoded 

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api",routes) // /api/users
app.get("/", function (req, res) {
    console.log("/ request.....");

})

app.get("/login", function (req, res) {
    console.log("/ login.....");
    res.send({ "msg": "login" })
})

mongoose.connect("mongodb://localhost:27017/ism21",function(err,resp){
    if(err){
        console.log("db not connected",err);
    }else{
        console.log("db connected");
    }
})

app.listen(3000, function () {
    console.log("server started....");
})


//dbconnection 
