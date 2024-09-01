
const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()

const router = require("./Router/RootRouter")

app.use(express.json())

// app.use(cors("http://localhost:3000"))



app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
    "Access-Control-Allow-Credentials": true,
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
  }));

app.set(express.static("./public"))

app.use("/public", express.static("public"))

require("./dbConnect")


app.use("/shashiShantiApi",router)

app.listen(8000,()=>{
    console.log("server connected at http://localhost:8000");
    
})