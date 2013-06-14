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
				expect(res).equal(true);
			}; 
		})());
	}
});

describe('getLastMotion', function() {
	var motions = [
		'h',
		'l',
		'0',
		'$',
		'^',
		'g_',
		'|',
		'fa',
		'f9',
		'f_',
		'Fg',
		'F2',
		'F?',
		'ta',
		't9',
		't_',
		'Tg',
		'T2',
		'T?',
		';',
		',',
		'k',
		'j',
		'-',
		'+',
		'_',
		'G',
		'e',
		'E',
		'w',
		'W',
		'b',
		'B',
		'ge',
		'gE',
		'(',
		')',
		'{',
		'}',
		']]',
		'][',
		'[[',
		'[]'
	
	];
	for(var i in motions) {
		var motion = motions[i]
		it('catches ' + motion, (function() { 
			var res = parser.getLastMotion(motion) === motion; return function() { 
				expect(res).equal(true);
			}; 
		})());
	}

});
