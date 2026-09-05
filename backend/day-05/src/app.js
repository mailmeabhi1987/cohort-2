

const express = require("express")

const app = express()


const notes = []

// 
// POST 
// create note
app.post("/notes", (req,res) => {
    console.log(req.body)
})


module.exports = app