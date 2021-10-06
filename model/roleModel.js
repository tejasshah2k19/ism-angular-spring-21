var mongoose = require("mongoose")



var roleSchme = mongoose.Schema({
    roleName:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("Role",roleSchme)