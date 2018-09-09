const express = require('express');  
const mongoose = require('mongoose');
const router = express.Router();
// Load Menu Model
require('../models/Menu');
const Menu = mongoose.model('Menu');

// Menu Index Page
module.exports = router;