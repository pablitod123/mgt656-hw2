var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.get('/enchanting-hummingbird', function(request, response){
    response.send('enchanting-hummingbird');
});

app.listen(process.env.PORT || 4000);