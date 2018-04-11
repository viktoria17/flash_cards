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

const mainRouter = require('../routes');
const cardRouter = require('../routes/card');

app.use(mainRouter);
app.use('/card', cardRouter);

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