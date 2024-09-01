const mongoose = require("mongoose")

const ContactUsSchema = mongoose.Schema({
    name:{
        type:String,
        //required:[true,"Name Must //required"]
    },
    email:{
        type:String,
        //required:[true,"Email Address Must //required"]
    },
    phone:{
        type:String,
        //required:[true,"Phone Number Must //required"]
    },
    subject:{
        type:String,
        //required:[true,"Subject Must //required"]
    },
    message:{
        type:String,
        //required:[true,"Message Must //required"]
    },
    date:{
        type:String,
        default:""
    },
    active:{
        type:Boolean,
        default:true
    }
})
const ContactUs = new mongoose.model("ContactUs",ContactUsSchema)
module.exports = ContactUs