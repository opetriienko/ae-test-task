var express = require('express');
var multer = require('multer');
var fs = require('fs');
var app = express();

var DIR = './uploads/';

var upload = multer({inMemory: true}).single('avatar');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.setHeader['Access-Control-Allow-Headers'] = 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept';
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// app.use(multer({
//     inMemory: true
// }).single('singleInputFileName'));

app.post('/api/upload', function (req, res, next) {
    upload(req, res, function (err) {
        console.log(111111);
        if (err) {
            // An error occurred when uploading
            console.log('error!!!');
            return false;
        }
    });
});

var PORT = process.env.PORT || 4400;

app.listen(PORT, function () {
    console.log('Working on port ' + PORT);
});