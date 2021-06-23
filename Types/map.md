# Map

**ID**: `map`  
**System Type**: `Map`  
**Sub Types**: `[key]: value`  
**Child Types**: key, value    

A collection of key/values.

### Examples

- `[['One', 1], ['Two', 2]]`
- `[]`

### Type Options

- `key`: The type for the keys in the map.
- `value`: The type for the values in the map.
- `sorted`: If the map is sorted by `key`s or `value`s. **maybe**

### Data Format

```
['map', [[key, value], ...]]
```

`key` & `value` is not stored in the data format of [type, value], it's strictly the value.

### Type Format

```
['map', { key: Type, value: Type, sorted?: 'key' | 'value' }]
```
