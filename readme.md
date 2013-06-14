#Vim Command Parser

Vim's commands are powerful. This library parses them 



##Format

Input: command string

```javascript
parse('c3G')
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


