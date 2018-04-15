const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/', (req, res) => {
	const cardsAmount = cards.length;
	const cardRandomNr = Math.floor(Math.random() * cardsAmount);
	res.redirect(`/card/${cardRandomNr}`);
});

router.get('/:id', (req, res) => {
	// http://localhost:3000/card/1?side=question
	const { side } = req.query;
	console.log('side: ', side); // => question
	
	const { id } = req.params; 
	console.log('id: ', id); // => 1

	if (!side) {
		return res.redirect(`/card/${id}?side=question`);
	}

	const name = req.cookies.username;
	console.log('NAME: ',name);

	const text = cards[id][side];
	console.log('question: ', text); // => What is one way a website can store data in a user's browser?

	const { hint } = cards[id];
	console.log('hint: ', hint); // => They are delicious with milk

	const templateData = { id, text, name };

	if (side === 'question') {
		templateData.hint = hint;
		templateData.sideToShow = 'answer';
		templateData.sideToShowDisplay = 'Answer';
	} else if (side === 'answer') {
		templateData.sideToShow = 'question';
		templateData.sideToShowDisplay = 'Question';
	}

	res.render('card', templateData);
});

module.exports = router;