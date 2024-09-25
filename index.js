const express = require("express")
const cookie = require("cookie-parser")
const connect = require("./config/db")
const userRoute = require("./routes/user.routes")
const expenseRoute = require("./routes/expense.routes")
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true }))
require("dotenv").config()
app.use(cookie())

app.use("/user" , userRoute)
app.use("/exp" , expenseRoute)

app.listen(process.env.PORT , ()=>{
    connect()
    console.log(`port is strat ${process.env.PORT}`)
})