const express = require('express');
// Const config = require('config');

const router = new express.Router();

/* GET home page. */
router.get('/', (req, res) => {
	res.render('index', {title: 'Nginx Eyes'});
});

module.exports = router;
