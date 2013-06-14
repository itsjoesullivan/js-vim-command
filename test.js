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


