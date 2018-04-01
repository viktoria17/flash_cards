const express = require('express');

// we call expresss to create an Express app
const app = express();

app.set('view engine', 'pug');

// the get method is used to handle the get requests to a certain URL
app.get('/', (req, res) => {
	res.render('index');
});

app.get('/card', (req, res) => {
	// res.render('card');
	// res.render('card', { question: 'What is always coming, but never arrives?', hint: 'Think about time'});
	res.render('card', { question: 'What is always coming, but never arrives?'});
});

app.listen(3000, () => {
	console.log('The application is running on localhost:3000');
});