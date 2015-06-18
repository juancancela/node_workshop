var express = require('express');
var router = express.Router();
var users = {};

router.get('/', function (req, res) {
    res.send(users);
});

router.post('/add', function (req, res) {
    users[req.body.id] = req.body;
    res.send(201);
});

router.post('/remove/:id', function (req, res) {
    delete users[req.params.id];
    res.send(204);
});

module.exports = router;
