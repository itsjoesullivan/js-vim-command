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
var opTest = new RegExp('\(c\|d\|y\|~\|g~\|gu\|gU\|!\|=\|gg\|g\\?\|>\|<\|zf\|g@\)$');
/** Determines whether command is an operator, returning it if so */
Parser.prototype.getLastOperator = function(command) {
	var op = opTest.exec(command)
	return op ? op[1] : false;
};

/** Get motions, of which there are a variety
	h l 0 ^ g_ | (f|F|t|T){char} ; , k j - + _ G
	
word motions:
	e E w W b B ge gE

text object motions:
	( ) { } ]] [] [[ []

*/
var motions = ['h','l','0','\\$','\\^','g_','\\|','\(?:f\|F\|t\|T\)\(\?\:\[\\S\]\)',';',',','k','j','\\+','-','_','G','e','E','w','W','b','B','ge','gE','\\(','\\)','\\{','\\}','\\]\\]','\\]\\[','\\[\\[','\\[\\]'];
var motionTest = new RegExp('\(' + motions.join('\|') + '\)\$');
Parser.prototype.getLastMotion = function(command) {
	var motion = motionTest.exec(command);	
	return motion ? motion[1] : false;	
};
