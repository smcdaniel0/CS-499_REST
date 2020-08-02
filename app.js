/*
    This application is a demonstration of a RESTful API.
    It is used with the database "EmployeeDB" and the collection
    "employees". Tested with Postman.
*/

const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/EmployeeDB'
const mongojs = require('mongojs');

const app = express()

// Establish a connection to mongodb
mongoose.connect(url, {useNewUrlParser: true})
const con = mongoose.connection

con.on('open', () => {
    console.log('Connected')
})

app.use(express.json())

// Directing to the CRUD commands
const employeeRouter = require('./routes/employees')
app.use('/', employeeRouter)

app.listen(3000, () => {
    console.log('Server Started')
})


// Loads a premade json file to the database
// Uncomment below to use

/*
const db = mongojs('EmployeeDB', ["employees"]);
const fs = require('fs')
const router = express.Router()

fs.readFile('json/sample.json', 'utf8', (err, data) => {
    if (err) throw err

    console.log(data)
    var json = JSON.parse(data)

    db.employees.insert(json, function(err, doc) {
        console.log(data);
    if(err) throw err;
  })
})
*/