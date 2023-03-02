const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

const port = 5000

const users = [
    {   
        id: 0,
        name: "Pedro Felipe da Silva", 
        phone: "(81) 9.9426-8345"
    },
    {   
        id: 1,
        name: "Pedro Felipe da Silva", 
        phone: "(81) 9.9426-8345"
    },
    {   
        id: 2,
        name: "Pedro Felipe da Silva", 
        phone: "(81) 9.9426-8345"
    }
]

app.set("views", path.join(__dirname, 'views'))
app.set("view engine", 'ejs')


app.get("/", (req, res) =>{
    res.render('user', {users: users})
})

app.listen(5000, () => {
    console.log("port 5000")
})