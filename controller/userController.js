const User = require("../model/userModel")

module.exports.getAllUsers = function getAllUsers(request, response) {
    User.find(function (err, data) {
        if (err) {
            response.send({ msg: "SME", status: -1, data: err })
        } else {

            response.send({ msg: "user ret...", status: 200, data: data })
        }
    })

}

module.exports.signup = function signup(req, res) {

    var user = new User({
        firstName: req.body.firstName,
        email: req.body.email,
        password: req.body.password
    })

    user.save(function (err, data) {
        if (err) {
            res.send({ "msg": "something went wrong", status: -1, data: err })
        } else {
            res.send({ "msg": "user added", status: 200, data: data })
        }
    })
}
// url =>   users/615d60a60bd6438326673a66
module.exports.deleteUserById = function deleteUserById(req, res) {
    //params -> path variable 
    // query -> ? 
    // body -> json urlEncoded 
    let userId = req.params.userId
    User.findByIdAndDelete({ _id: userId }, function (err, data) {
        if (err) {
            res.json({ status: -1, msg: "Something Went Wrong", data: err })
        } else {
            if (data) {
                res.json({ status: 200, msg: "User Removed", data: data })
            } else {
                res.json({ status: -1, msg: "Invalid UserId", data: req.params.userId })
            }
        }
    })
}

module.exports.getUserById = function getUserById(req,res){
    //   let userId = req.params.userId 
    User.find({_id:req.params.userId},function(err,data){
        if(err){
            res.json({ status: -1, msg: "Something Went Wrong", data: err })
        }else{
            res.json({ status: 200, msg: "User Retr...", data: data }) 
        }
    })
}

module.exports.updateUser = function updateUser(req,res){
    User.updateOne({_id:req.body.userId},
        {
            $set:{
                    firstName:req.body.firstName,
                    email:req.body.email 
                }
        },
        function(err,data){
            if(err){
                res.json({ status: -1, msg: "Something Went Wrong", data: err })
            }else{
                res.json({ status: 200, msg: "User modified", data: data }) 
            }   
        }
    )
}
