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
['obj', { [key]: value, ... }]
```

`value` is not stored in the data format of `[type, value]`, it's strictly the `value`.

### Type Format

```
['obj', { [key]: Type, ... }]
```
