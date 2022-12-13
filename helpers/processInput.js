/*
 * Process input by making input lower case
 * and remove unnessary punctuation. 
 */
const removePunctuation = require('../helpers/removePunc')
function processInput(message){
	message = message.toLowerCase();
	message = removePunctuation(message);
	return message;
}

module.exports = processInput