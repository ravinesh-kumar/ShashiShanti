const mongoose = require("mongoose")

const CartSchema = mongoose.Schema({
    userid:{
        type:String,
        // required:[true,"User IdMust // required"]
    },
    productid:{
        type:String,
        // required:[true,"Product Id Must // required"]
    },
    name:{
        type:String,
        // required:[true,"Product Name Must // required"]
    },
    brand:{
        type:String,
        // required:[true,"Product Brand Name Must // required"]
    },
    color:{
        type:String,
        // required:[true,"Product Color Must // required"]
    },
    size:{
        type:String,
        // required:[true,"Product Size Must // required"]
    },
    price:{
        type:Number,
        // required:[true,"Product Price Must // required"]
    },
    qty:{
        type:Number,
        // required:[true,"Product Quantity Must // required"]
    },
    total:{
        type:Number,
        // required:[true,"Product Total // required"]
    },
    pic:{
        type:String,
        // required:[true,"Product Pic Must // required"]
    }
})
const Cart = new mongoose.model("Cart",CartSchema)
module.exports = Cart