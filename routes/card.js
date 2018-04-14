const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/:id', (req, res) => {
	// http://localhost:3000/card/1?side=question
	const { side } = req.query;
	console.log('side: ', side); // => question
	
	const { id } = req.params; 
	console.log('id: ', id); // => 1

	const text = cards[id][side];
	console.log('question: ', text); // => What is one way a website can store data in a user's browser?

	const hint = cards[id].hint;
	console.log('hint: ', hint); // => They are delicious with milk

	const templateData = { text };

	if (side === 'question') {
		templateData.hint = hint;
	}

	res.render('card', templateData);
});

module.exports = router;