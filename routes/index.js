const express = require('express');
const config = require('config');

const router = new express.Router();

/* GET home page. */
router.get('/', (req, res) => {
	var dbPath = config.get('dbpath');
	console.log(dbPath);
	console.log('env: ' + config.util.getEnv('NODE_ENV'));
	if (config.get('dbpath') === null) {
		// Not inited, first start.
		res.render('init', {title: 'Nginx Eyes'});
	} else {
		// Has inited.
		res.render('index', {title: 'Nginx Eyes'});
	}
});

module.exports = router;
