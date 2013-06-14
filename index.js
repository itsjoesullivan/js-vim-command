var Parser = module.exports = function() {


};

/** Parse a command

input: string of text
output: object containing the interpreted string and an array with each element 

*/
Parser.prototype.parse = function(command) {

var out;
	var ct =	/^([1-9]+[0-9]*)$/.exec(command);

	if(ct) {
		out = {
			value: [ parseInt(ct[1]) ],
			description: '{count}'
		};
		return out;
	}
		
/*


	{count}

	{count}{op}{motion}
	{op}{count}{motion}
	{count}{op}{count}{motion}

	{motion}

	{
*/
	
};
//Test for operator
var opTest = new RegExp('\(c\|d\|y\|~\|g~\|gu\|gU\|!\|=\|gg\|g?\|>\|<\|zf\|g@\)$');
/** Determines whether command is an operator, returning it if so */
Parser.prototype.getLastOperator = function(command) {
	var op = opTest.exec(command)
	return op[1];
};


