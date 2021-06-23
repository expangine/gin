# List

**ID**: `list`  
**System Type**: `[]`  
**Sub Types**: `length: num`, `[index]: item`  
**Child Types**: `[index]: item`  

An array of values.

### Examples

- `[1, 2, 3, 4]`
- `[]`

### Type Options

- `item`: The type for the items in the list.
- `min`: The minimum number of items required.
- `max`: The maximum number of items required.

### Data Format

```
['list', [value, ...]]
```

`value` is not stored in the data format of [type, value], it's strictly the value.

### Type Format

```
['list', { item: Type, min?: number, max?: number }]
```
