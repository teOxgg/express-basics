'use strict';

var express = require('express'),
    posts = require('./mock/posts.json');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + './templates')

app.get('/', function(req, res){
	res.send('<h1>I am In love with treehouse!</h1>');
});

app.get('/blog/:title?', function(req, res){
	var title = req.params.title;
    if (title === undefined) {
        res.status(503);
        res.send("This page is under construction!");
    } else {
        var post = posts[title];
        res.send(post);    
    }
    
});

var port = 3000;
app.listen(port, function(){
	console.log('the frontend server is running on port '+ port);
});