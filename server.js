var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var server = app.listen(3000, function () {

    var port = server.address().port;

    console.log('Sever started at http://localhost:%s', port);
});
