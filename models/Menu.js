const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MenuSchema =  new Schema({
    Name: String,
    TargetUrl:String,
    Order:Number,
    Publish: String
});

const Menu = mongoose.model('Menu',MenuSchema);
module.exports = Menu ;