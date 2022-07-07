// Intialize Modules
var PORT= process.env.PORT || 3000;
var express=require("express");
var mongoose=require('mongoose');
const app=express();
var bodyparser=require("body-parser");
var methodOverride=require("method-override");
require('dotenv').config();

//Initialize the Mongo DB Models
var Site= require('./models/project');
var Review = require('./models/revs');

// Css and static elements intialize 
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
app.use(methodOverride("_method"));

//DB Connection
mongoose.connect( 'mongodb+srv://akkhill1910:konduruakhil@datawarehouse.fn8xk.mongodb.net/?retryWrites=true&w=majority' ,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
mongoose.connection.on('connected', () =>{
    console.log('Mongoose is connected');
});

//GET Routes 



app.get('/dash',function(req,res){
    res.render('dash');
});

app.get('/addnew',function(req,res){
    res.render('addtest');
});

app.get('/account',function(req,res){
    res.render('account');
});

app.get('/addrev',function(req,res){
    res.render('addrev');
});
app.get('/',function(req,res){
    res.render('index');
});






app.get('/data',function(req,res){
    Site.find({},function(err,sites){
        if(err)
        {
            console.log(err);
        }
        else{
            res.render('showdata',{showdata:sites});
        }
    });
});

app.get('/review',function(req,res){
    Review.find({},function(err,sites){
        if(err)
        {
            console.log(err);
        }
        else{
            res.render('review',{showdata:sites});
        }
    });
});

app.get('/searchdata',function(req,res){
    

    Site.find(req.body.search,function(err,sites){
        if(err)
        {
            console.log(err);
        }
        else{
            
            res.render('search',{showdata:sites});
            console.log('new');
            console.log(req.body.search);
        }
    });
});


//POST Routes 
app.post('/addtest',function(req,res){
    Site.create(req.body.site,function(err,newsite){
        if(err){
            res.render('addtest');
        }
        else{
            res.redirect('data');
        }
    });
});


app.post('/addrev',function(req,res){
    Review.create(req.body.rev,function(err,newrev){
        if(err){
            res.redirect('dash');
        }
        else{
            res.render('addrev');
        }
    });
});


app.listen(PORT,console.log('Server Up Bitches !!'));