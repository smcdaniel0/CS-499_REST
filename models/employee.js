const mongoose = require('mongoose')

// Creating the schema for the employee database
// Every element is required 
const employeeSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Employee', employeeSchema)