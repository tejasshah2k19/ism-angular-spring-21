var Role = require("../model/roleModel")

module.exports.addRole = function addRole(req,res){

    var role = new Role({
        roleName : req.body.roleName
    })

    role.save(function(err,data){
        if(err){
            res.json({data:err,msg:"SMW",status:-1})
        }else{
            res.json({data:data,msg:"role added",status:200})
        }
    })
}