const mongoose = require('mongoose');

const ContactSchema =  new mongoose.Schema({
    Name:String,
    Email:String,
    Title: String,
    Message:String,
    Reviewd:Boolean
});

const Contact = mongoose.model('Contact',ContactSchema);
module.exports = Contact ;