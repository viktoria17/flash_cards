const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// we call expresss to create an Express app
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');

app.use((req, res, next) => {
	req.msg = 'This is message!';
	console.log('Hello');
	// we end middleware by calling next or sending a response
	next();
});

app.use((req, res, next) => {
	console.log(req.msg);
	next();
});

// the get method is used to handle the get requests to a certain URL
app.get('/', (req, res) => {
	const name = req.cookies.username;
	if(name){
		res.render('index', {name});
	}else {
		res.redirect('/');
	}
});

app.get('/card', (req, res) => {
	// res.render('card', { question: 'What is always coming, but never arrives?', hint: 'Think about time'});
	res.render('card', { question: 'What is always coming, but never arrives?'});
});

app.get('/hello', (req, res) => {
	const name = req.cookies.username;
	if (name) {
		res.redirect('/');
	} else {
		res.render('hello');
	}
});

app.post('/hello', (req, res) => {
	// sends a cookie to the browser after we submit the form
	res.cookie('username', req.body.username);
	console.dir(req.body);
	res.redirect('/');
});

app.post('/goodbye', (req, res) => {
	res.clearCookie('username');
	res.redirect('/hello')
});

app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});
  
app.use((err, req, res, next) => {
	res.locals.error = err;
	res.status(err.status);
	res.render('error', err);
});

app.listen(3000, () => {
	console.log('The application is running on localhost:3000');
});