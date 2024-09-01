const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        // required:[true,"Product Name Must // required"]
    },
    maincategory:{
        type:String,
        // required:[true,"Product Maincategory Must // required"]
    },

    size:{
        type:String,
        // required:[true,"Product Size Must // required"]
    },
    baseprice:{
        type:Number,
        // required:[true,"Product Base Price Must // required"]
    },
    discount:{
        type:Number,
        // required:[true,"Product Discount Must // required"]
    },
    finalprice:{
        type:Number,
        // required:[true,"Product Final Price Must // required"]
    },
    stock:{
        type:String,
        default:"In Stock"
    },
    description:{
        type:String,
        default:""
    },
    pic1:{
        type:String,
        default:""
    },
    pic2:{
        type:String,
        default:""
    },
    pic3:{
        type:String,
        default:""
    },
    pic4:{
        type:String,
        default:""
    }
})
const Product = new mongoose.model("Product",ProductSchema)
module.exports = Product