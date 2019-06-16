//import express 
//CommonJS pattern // ES5 
var express = require('express');
//reference variable for express 
var app = express();
// http call => request and response object 
//setting configuration for request and response object for CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//importing body-parser to parse from rest client
var bodyParser = require('body-parser');
//importing mongooose 
var mongoose = require('mongoose');
//connecting to the database table -customers
mongoose.connect('mongodb://localhost:27017/danskesblconsent');

//body parser pakage
// to parse my rest-client (postman/telerik fiddler) 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

//apiroutes for customers 
//CRUD API for customers 
//var customers = require('./apiroutes/customer_routes.js')(app);
//apiroutes for vendors 
//var vendors = require('./apiroutes/vendor_routes.js')(app);
//apiroutes for orders
//apiroutes for transactions 

var products = require('./apiroutes/product_routes.js')(app);





//On Successful running of the Web Server created with Express
//get request on "/" send the response
app.get('/', function(req, res){
   // res.send("Hello ITC Infotech");
    res.json({hello : 'ITC Infotech- Web API with AngularJS Demo'});
});


var server = app.listen(3000, function(){
    console.log('Server running at http://127.0.0.1:3000');
});
// db connection status 
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Successfull Connection to MongoDB");
});






