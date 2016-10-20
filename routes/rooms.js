'use strict';

var express = require('express');
var router = express.Router();
var path = require('path');
var root = path.normalize(__dirname + '/..');

router.route('/foo')
    .get(function(req, res) {
        res.sendFile(root + '/public/foo.html');
    });

module.exports = router;
