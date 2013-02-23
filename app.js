window.App = Ember.Application.create();

App.Card = Em.Object.extend({
	question: "this is a question",
	answer: "this is an answer"
});

App.cardController = Em.ArrayProxy.create({
	content: [];

	createQuestion: function(){

	},

	createAnswer: function(){

	},

	flipCard: function(){

	},

	deleteCard: function(){

	},

	skipCard: function(){

	},

	answerCard: function(){

	},

	shuffleCards: function(){

	},

	resetCards: function(){

	},

	addNewDeck: function(){

	},

	displayDeck: function(){
		
	},

});

var mainView = Ember.View.create({
	templateName = 'mainView'
});

var sideView = Ember.View.create({
	templateName = 'sideView'
});

var cardView = Ember.View.create({
	templateName = 'cardView'
});

var deckView = Ember.View.create({
	templateName = 'deckView'
});