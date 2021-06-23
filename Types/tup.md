# Tuple

**ID**: `tup`  
**System Type**: `[]`  
**Sub Types**: `[index]: element`, `[index enum]: many of all element types`, `[index: num]: many of all element types`  
**Child Types**: `[index]: element`  

A user defined list of elements.

### Examples

- `[1, 2, 3]`
- `[1, 'hello']`

### Type Options

- `index`: The type at `index`.

### Data Format

```
['tup', [element, ...]]
```

`element` is not stored in the data format of `[type, value]`, it's strictly the `value`.

### Type Format

```
['tup', Type[]]
```
