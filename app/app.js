const express = require('express');

// we call expresss to create an Express app
const app = express();

app.set('view engine', 'pug');

// the get method is used to handle the get requests to a certain URL
app.get('/', (req, res) => {
	res.send('<h3>Home</h3>');
});

app.get('/history', (req, res) => {
	res.send('<h3>History</h3>');
});

app.get('/about', (req, res) => {
	res.send('<h3>About</h3>')
});

app.listen(3000, () => {
	console.log('The application is running on localhost:3000');
});