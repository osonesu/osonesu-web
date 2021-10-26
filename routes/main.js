__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/about', (req, res) => {
    res.sendFile(__path + '/views/dev.html')
})

router.get('/profil/2021', (req, res) => {
    res.sendFile(__path + '/views/profil-2021.html')
})

module.exports = router
