var _ = require('lodash');
var express = require('express');
var app = express();

app.get('/1', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send([1, 2, 3, 4, 5]);
});

app.get('/2', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send([6, 7, 8, 9, 10]);
});

app.get('/3', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(500).send('Something broke!');
});

app.get('/data', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send([{
        name: 'Tomek',
        age: 31,
        pets: 1,
        houses: 1
    }, {
        name: 'Michał',
        age: 25,
        pets: 3,
        houses: 1
    }, {
        name: 'Grzesio',
        age: 33,
        pets: 0,
        houses: 2
    }, {
        name: 'Rafał',
        age: 28,
        houses: 1
    }, {
        name: 'Kasia',
        age: 29,
        pets: 1,
        houses: 1
    }, {
        name: 'Anita',
        age: 25,
        pets: 10,
        houses: 1
    }, {
        name: 'Paweł',
        age: 25,
        pets: 1,
        houses: 1
    }, {
        name: 'unknown',
        houses: 'none'
    }])
});

app.get('/data1', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send([1, 2, 3, 'ok', new Error, {}, '', -1, 0.5, null, undefined])
});

app.listen(4321, function () {
    console.log('Example app listening on port 4321!');
});