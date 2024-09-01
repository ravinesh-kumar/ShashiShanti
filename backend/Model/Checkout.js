const mongoose = require("mongoose");

const CheckoutSchema = new mongoose.Schema({
    userid: {
        type: String,
        // required: [true, "User Id is required"]
    },
    orderstatus: {
        type: String,
        default: "Order is Placed"
    },
    paymentstatus: {
        type: String,
        default: "Pending"
    },
    paymentmode: {
        type: String,
        default: "COD"
    },
    subtotal: {
        type: Number,
        // required: [true, "Subtotal is required"]
    },
    shipping: {
        type: Number,
        // required: [true, "Shipping is required"]
    },
    total: {
        type: Number,
        // required: [true, "Total is required"]
    },
    date: {
        type: String,
        default: ""
    },
    rppid: {
        type: String,
        default: ""
    },
    name: {
        type: String,
        // required: [true, "User full name is required"]
    },
    username: {
        type: String,
        // required: [true, "Username is required"]
        // Ensure `unique: true` is commented or removed if you want to allow duplicates
        // unique: true
    },
    email: {
        type: String,
        // required: [true, "Email address is required"]
        // Ensure `unique: true` is commented or removed if you want to allow duplicates
        // unique: true
    },
    phone: {
        type: String,
        // required: [true, "Phone number is required"]
    },
    address: {
        type: String,
        default: ""
    },
    pin: {
        type: String,
        default: ""
    },
    city: {
        type: String,
        default: ""
    },
    state: {
        type: String,
        default: ""
    },
    products: [
        {
            productid: {
                type: String
            },
            name: {
                type: String
            },
            brand: {
                type: String
            },
            color: {
                type: String
            },
            size: {
                type: String
            },
            price: {
                type: Number
            },
            qty: {
                type: Number
            },
            total: {
                type: Number
            },
            pic: {
                type: String
            }
        }
    ]
});

const Checkout = mongoose.model("Checkout", CheckoutSchema);
module.exports = Checkout;




// const mongoose = require("mongoose")

// const CheckoutSchema = mongoose.Schema({
//     userid: {
//         type: String,
//         //required: [true, "User Id Must // //required"]
//     },
//     orderstatus: {
//         type: String,
//         default:"Order is Placed"
//     },
//     paymentstatus: {
//         type: String,
//         default:"Pending"
//     },
//     paymentmode: {
//         type: String,
//         default:"COD"
//     },
//     subtotal: {
//         type: Number,
//         //required:[true,"Subtotal Must // //required"]
//     },
//     shipping: {
//         type: Number,
//         //required:[true,"Shipping Must // //required"]
//     },
//     total: {
//         type: Number,
//         //required:[true,"Total Must // //required"]
//     },
//     date: {
//         type: String,
//         default:""
//     },
//     rppid: {
//         type: String,
//         default:""
//     },
//     name:{
//         type:String,
//         // // //required:[true,"User Full Name Must //required"]
//     },
//     username:{
//         type:String,
//         // // //required:[true,"User Name Must //required"],
//         //unique:true
//     },
//     email:{
//         type:String,
//         // // //required:[true,"Email Address Must //required"],
//         //unique:true
//     },
//     phone:{
//         type:String,
//         // // //required:[true,"Phone Number Must //required"]
//     },
    
//     address:{
//         type:String,
//         default:""
//     },
//     pin:{
//         type:String,
//         default:""
//     },
//     city:{
//         type:String,
//         default:""
//     },
//     state:{
//         type:String,
//         default:""
//     },
//     products: [
//         {
//             productid: {
//                 type: String
//             },
//             name: {
//                 type: String
//             },
//             brand: {
//                 type: String
//             },
//             color: {
//                 type: String
//             },
//             size: {
//                 type: String
//             },
//             price: {
//                 type: Number
//             },
//             qty: {
//                 type: Number
//             },
//             total: {
//                 type: Number
//             },
//             pic: {
//                 type: String
//             }
//         }
//     ]
// })
// const Checkout = new mongoose.model("Checkout", CheckoutSchema)
// module.exports = Checkout