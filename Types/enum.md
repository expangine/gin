# Enum

**ID**: `enum`  
**System Type**: `enum`  
**Sub Types**: *none*

A set of key/value constants.

### Examples

- `'Male'`
- `0`

### Type Options

- `key`: The key type.
- `value`: The value type.
- `constants`: The array of key-value tuples.

### Data Format

```
['enumName', enumName key]
```

`enumName key` is not stored in the data format of `[type, value]`, it's strictly the `value`.

### Type Format

```
enumName = ['enum', { key: Type, value: Type, constants: [key: Data, value: Data][] }]
```

`key` & `value` in constants is not stored in the data format of `[type, value]`, it's strictly the `value`.
