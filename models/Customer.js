const mongoose = require('mongoose');

const CustomerSchema =  new mongoose.Schema({
Name: String,
Email:string,

});

const Customer = mongoose.model('Customer',CustomerSchema);
module.exports = Customer ;