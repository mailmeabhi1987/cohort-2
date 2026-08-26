const express = require("express")


const app = express()


app.get("/", (req,res) => {
    console.log("Hello World")
    res.send("Hello World")
})

app.get("/home", (req,res) => {
    res.send("This is Home page")
})

app.get("/about", (req,res) => {
    res.send("This is About page")
})

app.listen(3000)