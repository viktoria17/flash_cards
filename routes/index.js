const express = require('express');
const router = express.Router();

// the get method is used to handle the get requests to a certain URL
router.get('/', (req, res) => {
	const name = req.cookies.username;
	if(name){
		res.render('index', {name});
	}else {
		res.redirect('/');
	}
});

router.get('/hello', (req, res) => {
	const name = req.cookies.username;
	if (name) {
		res.redirect('/');
	} else {
		res.render('hello');
	}
});

router.post('/hello', (req, res) => {
	// sends a cookie to the browser after we submit the form
	res.cookie('username', req.body.username);
	console.dir(req.body);
	res.redirect('/');
});

router.post('/goodbye', (req, res) => {
	res.clearCookie('username');
	res.redirect('/hello')
});

module.exports = router;