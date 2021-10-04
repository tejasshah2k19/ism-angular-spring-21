const express = require("express")
const productController = require("./controller/productController")

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
app.listen(3000, function () {
    console.log("server started....");
})


//dbconnection 
