var Parser = require('./index');
var parser = new Parser();
parse = function() {
	return parser.parse.apply(parser,arguments);
};

var expect = require('chai').expect


it('recognizes counts alone', function() {
	var command = parse('10');
	console.log(command);
	expect(command.description).equal('{count}');
});


describe('getLastOperator', function() {
	var operators = [
		'c',
		'd',
		'y',
		'~',
		'g~',
		'gu',
		'gU',
		'!',
		'=',
		'gg',
		'g?',
		'>',
		'<',
		'zf',
		'g@'
	]
	for(var i in operators) {
		var op = operators[i];
		it('catches ' + op, (function() { 
			var res = parser.getLastOperator(op) === op; return function() { 
				return res; 
			}; 
		})());
	}
});
