var express = require('express');
var bodyParser = require('body-parser');
var artists = require('./data')

var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function(req, res){
    res.send("hello");
})
app.get('/artists', function(req,res){
    res.send(artists)
})
app.get('/artists/:id', function(req,res){
    var artist = artists.find(function(artist){
        return artist.id === Number(req.params.id)
    })
    res.send(artist)
})
app.post('/artists', function(req,res){ 
    var artist = {
        id: Date.now(),
        name: req.body.name
    }
    artists.push(artist)
    res.send(artist)
})
app.put('/artists/:id', function(req,res){
    var artist = artists.find(function(artist){
        return artist.id === Number(req.params.id)
    })
    artist.name = req.body.name;
    res.send(artist)
    res.sendStatus(200)
})
app.delete('/artist/:id', function(req,res){
    artists = artist.filter(function(artist){
        return artist.id !== Number(req.params.id)
    })
    res.sendStatus(200)
})

app.listen(1234, function(){
    console.log("started server")
})