const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile('index.html', function(error, data){
  	if (error) {
  		res.writeHead(404);
  		res.write('Error: File not found');
  	} else {
  		res.write(data);
  	}
  	res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})

var express=require("express"); 
var bodyParser=require("body-parser"); 

const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/form'); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
	console.log("connection succeeded"); 
}) 

var app=express() 


app.use(bodyParser.json()); 
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ 
	extended: true
})); 

app.post('/registration', function(req,res){ 
    var fname = req.body.fname; 
    var lname = req.body.lname;
    var address = req.body.address;
    var city = req.body.city;
    var state = req.body.state;
    var pin = req.body.pin;
    var country = req.body.country; 
	var email =req.body.email; 
    var phone =req.body.phone; 
    var gender = req.body.gender;
    var dob = req.body.dob;
    var efname = req.body.efname;
    var elname = req.body.elname;
    var relation = req.body.relation;
    var ephone = req.body.ephone;


	var data = { 
        "fname": fname, 
        "lname": lname,
        "address": address,
        "city": city,
        "state": state,
        "pin": pin,
        "country": country,
		"email":email, 
        "phone":phone,
        "gender":gender,
        "dob":dob,
        "efname":efname,
        "elname":elname,
        "relation":relation,
        "ephone":ephone
	} 
db.collection('details').insertOne(data,function(err, collection){ 
		if (err) throw err; 
		console.log("Record inserted Successfully"); 
			
	}); 
		
	return res.redirect('/signup_success.html'); 
}) 


app.get('/',function(req,res){ 
res.set({ 
	'Access-control-Allow-Origin': '*'
	}); 
return res.redirect( 'index.html' ); 
}).listen(8080) 


console.log("server listening at port 8080"); 
