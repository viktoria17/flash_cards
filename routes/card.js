const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	// every route in this file starts with /card, because we are directing traffic into this file from the card path in the app.js file
	res.render('card', { question: 'What is always coming, but never arrives?'});
});

module.exports = router;