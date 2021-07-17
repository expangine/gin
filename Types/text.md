# Text

**ID**: `text`  
**System Type**: `string`  
**Sub Types**: `length: num`, `[index]: text`    
**Child Types**: *none*  

A string of zero or more characters.

### Examples

- `''`
- `' '`
- `'Hello World'`

### Type Options

- `min`: The minimum acceptable length.
- `max`: The maximum acceptable length.
- `case`: If 'upper' or 'lower' is required.
- `matches`: A regular expression that the text must match.

### Data Format

```
['text', string]
```

### Type Format

```
['text', { min?: number, max?: number, case?: 'upper' | 'lower', matches?: RegExp }?]
```
