var express = require('express');
var router = express.Router();
var pg = require('pg');
var connect = require('../modules/connection');

router.get('/', function(req, res) {
    pg.connect(connect, function(err, client, done) {
      client.query('SELECT * FROM people',
      function(err, result) {
        done();

        if(err) {
          console.log("query error:", err);
        }

        res.send(result.rows);

      });
    });
});


module.exports = router;
