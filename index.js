const express = require("express")
const productController = require("./controller/productController")
const userController  = require("./controller/userController")
const mongoose = require("mongoose")
//json 
//urlencoded 

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", function (req, res) {
    console.log("/ request.....");

})

app.get("/login", function (req, res) {
    console.log("/ login.....");
    res.send({ "msg": "login" })
})

app.post("/products",productController.saveProduct)
app.get("/products",productController.getAllProducts)
app.get("/product/:productId",productController.getProduct)
app.post("/signup",userController.signup)

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
