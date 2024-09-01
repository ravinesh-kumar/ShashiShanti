const mongoose = require("mongoose")

async function getDbConnect(){

await mongoose.connect("mongodb://127.0.0.1:27017/shashi_shanti")
console.log("database Connected");


}

getDbConnect()