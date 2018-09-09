// Requier Packages
const Express = require('express');
const Http = require('http');
const Path= require('path');
const Edge= require('express-edge');
const mongoose = require('mongoose');
const Bodyparser= require('body-parser');
const FileUpload = require('express-fileupload');

//Use express 
const app = Express();

//Dummy var 
const staticFolder = Path.join(__dirname, 'Public');
const Menu = require('./models/Menu'); 
//Static File
app.use(Express.static(staticFolder));

// Set Views folder
app.set('views','./views');

// Set  template 
app.use(Edge);


//Medilewares
//Body Parser
app.use(Bodyparser.json());
app.use(Bodyparser.urlencoded({extended:true}))

//express file upload 
app.use(FileUpload());
//Mongoose
//connect to database
// create Db 
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/simple-cms' ,{useNewUrlParser:true}) // user : Admin Passowrd WinterComming.2018
mongoose.connect('mongodb://Admin:WinterComming.2018@ds149732.mlab.com:49732/alhosampack-db' ,{useNewUrlParser:true})
    .then(() => {
    console.log('MongoDb Connecting >>>');
})
.catch(err => {
    console.log(err);
});

//End 

//set running Port
Port= process.env.PORT || 3000;

// app startup
app.listen(Port,err=>{
    !err ? console.log(`Running on http://localhost:${Port}`):console.log(`Error : ${err}`);
});

//routs
app.get('/menus', (req,res)=>{
    Menu.find({}).then(Menus=> res.render('menus/index',{Menus}));
    // console.log(Menus);
    });
app.post('/menus/Add',(req,res)=>{
    console.log(req.body);
    const newMenu = {
        Name: req.body.Name,
        TargetUrl: req.body.TargetUrl,
        Order: req.body.Order,
        Publish: req.body.Publish };
        new Menu(newMenu).save().then(res.redirect('/menus'));
    // Menu.create(req.body)
        // .then(res.redirect('/menus'))
    
    });

app.get('/menus/Add',(req,res)=>{
    res.render('menus/add');
    });

app.get('/menus/Edit',(req,res)=>{
    res.render('menus/Edit');
    });

app.get('/',(req,res)=>{
res.render('index');
});

app.get('/abouts',(req,res)=>{
    res.render('abouts');
    });
app.get('/contactus',(req,res)=>{
    res.render('contactus');
    });
app.get('/porducts',(req,res)=>{
    res.render('porducts');
    });
app.get('/customers',(req,res)=>{
    res.render('customers');
    });
    


app.get('/admin',(req,res)=>{
    res.render('admin/index');
    });