const mongoose = require('mongoose');

const PorductSchema =  new mongoose.Schema({
    Name: String ,
    Descreption:String,
});

const Product = mongoose.model('',PorductSchema);
module.exports = Product