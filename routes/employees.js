// Controllers/Routes for employees collection


// Importing required modules and assigning to variables
const express = require('express')
const router = express.Router()

// Importing employee module
const Employee = require('../models/employee')

// Get request to get all entries in JSON format from the EmployeesDB
// Loads all employees on the main page
router.get('/', async(req, res) => {
    try{
        const employees = await Employee.find()
        res.json(employees)
    }catch(err){
        res.send('Error ' + err)
    }
    
})

// Get request by id
router.get('/:id', async(req, res) => {
    try{
        const employee = await Employee.findById(req.params.id)
        res.json(employee)
    }catch(err){
        res.send('Could not find this employee.')
    }
    
})

// Add new entry to database with the following fields
router.post('/', async(req, res) => {
    const employee = new Employee({
        fullName: req.body.fullName,
        email: req.body.email,
        phone: req.body.phone,
        city: req.body.city,
        state: req.body.state
    })

    try{
        const a1 = await employee.save()
        res.json(a1)
    }
    catch(err){
        res.send("Each of the following fields must be used: fullName, email, phone, city, and state.")
    }
})

// Updating an entries phone number in the database by id
router.patch('/:id', async(req, res) => {
    try{
        const employee = await Employee.findById(req.params.id)
        employee.phone = req.body.phone
        const a1 = await employee.save()
        res.json(a1)
    }catch(err){
        res.send('Error ' + err)
    }
})

// Remove an entry from the database by id
router.delete('/:id', async(req, res) => {
    try{
        const employee = await Employee.findById(req.params.id)
        const a1 = await employee.remove()
        res.json(a1)
    }catch(err){
        res.send('Employee was not found')
    }
})

module.exports = router