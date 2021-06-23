# Object

**ID**: `obj`  
**System Type**: `{}`  
**Sub Types**: `[key]: value`, `[key enum]: many of all value types`, `[key: text]: many of all value types`  
**Child Types**: `[key]: value`  

A user defined set of keys and values.

### Examples

- `{ x: 3, y: true }`
- `{}`

### Type Options

- `key`: The type for `key`.

### Data Format

```
['obj', { x: ['num', 3], y: ['bool'] }]
```

### Type Format

```
['obj', { [key]: Type, ... }]
```
