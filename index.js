var express = require('express');
var app = express();

app.use(express.static(__dirname +'/public'));


app.get('/index', function (req, res) {
   res.sendFile('/home/shiva/work/Hack_Guj_Health/hackgujarat/public/index.html');
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})