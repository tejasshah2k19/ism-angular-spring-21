const User = require("../model/userModel")

module.exports.getAllUsers = function getAllUsers(request,response){
    User.find(function(err,data){
        if(err){
            response.send({msg:"SME",status:-1,data:err})
        }else{
            
            response.send({msg:"user ret...",status:200,data:data})
        }
    })

}

module.exports.signup = function signup(req,res){

    var user = new User({
        firstName:req.body.firstName,
        email:req.body.email,
        password:req.body.password
    })

    user.save(function(err,data){
        if(err){
            res.send({"msg":"something went wrong",status:-1,data:err})
        }else{
            res.send({"msg":"user added",status:200,data:data})
        }
    })
}