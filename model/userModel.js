const mongoose = require("mongoose")
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
    },
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Role"
    }

      
})

module.exports = mongoose.model("User",userSchema)

