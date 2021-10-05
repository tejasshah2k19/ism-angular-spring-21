const monggose = require("mongoose")
const Schema = require("mongoose").Schema


var userSchema = new Schema({
    firstName:{
        type:String,
        required:true,
        max:20
    },
    email:{
        type:String,
        required:true,
        max:20
    },
    password:{
        type:String,
        required:true,
        max:20
    }
      
})

module.exports = monggose.model("User",userSchema)

