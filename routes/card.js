const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/:id', (req, res) => {
	// every route in this file starts with /card, because we are directing traffic into this file from the card path in the app.js file
	res.render('card', { 
		question: cards[req.params.id].question,
		hint: cards[req.params.id].hint,
	});
	console.log(req.params.id)
});

module.exports = router;