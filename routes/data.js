var express = require('express');
var router = express.Router();
var pg = require('pg');
var connect = require('../modules/connection');


router.get('/', function(req, res) {
    var results = [];

    pg.connect(connect, function(err, client, done) {
        var query = client.query('SELECT * FROM people');

        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });

        // close connection
        query.on('end', function() {
            done();
            return res.json(results);
        });

        if(err) {
            console.log(err);
        }
    });
});


module.exports = router;