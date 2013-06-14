#Vim Command Parser

Vim's commands are powerful. This library is meant to parse those that fit a general syntax of:

	[count][operator][count][motion]

As defined in [vim docs](http://vimdoc.sourceforge.net/htmldoc/intro.html#notation)

##Usage

var Parser = require('vim-command-parser'),
	parser = new Parser();

##Format

Input: command string

```javascript
parser.parse('c3G')
```

Output: object

```javascript
{
	description: '{operator}{count}{motion}',
	value: ['c', 3, 'G']
}
```


##TODO:

- Registers


