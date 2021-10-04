module.exports.saveProduct = function saveProduct(req,res){
    console.log("save product");
    console.log(req.body);
    console.log(req.param);
    console.log(req.query);
    res.send({"msg":"saveProduct"})
}
module.exports.getAllProducts = function getAllProducts(req,res){
    console.log("getAllProducts");
    res.send({"msg":"getallProducts"})
}

module.exports.getProduct = function getProduct(req,res){
    console.log("get Product");
    res.send({"msg":"getProduct"})
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);// ? 

}
   
//console.log(module.exports);
