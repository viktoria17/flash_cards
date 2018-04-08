const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// we call expresss to create an Express app
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');

// the get method is used to handle the get requests to a certain URL
app.get('/', (req, res) => {
	res.render('index');
});

app.get('/card', (req, res) => {
	// res.render('card', { question: 'What is always coming, but never arrives?', hint: 'Think about time'});
	res.render('card', { question: 'What is always coming, but never arrives?'});
});

app.get('/hello', (req, res) => {
	res.render('hello', {name: req.cookies.username});
});

app.post('/hello', (req, res) => {
	// sends a cookie to the browser after we submit the form
	res.cookie('username', req.body.username);
	console.dir(req.body);
	res.render('hello', {name: req.body.username});
});

app.listen(3000, () => {
	console.log('The application is running on localhost:3000');
});