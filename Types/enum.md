# Enum

**ID**: `enum`  
**System Type**: `enum`  
**Sub Types**: *enum value sub types*  
**Child Types**: key, value  

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
['key type', key value]
```

An enum value appears like another type, but it's a match for one of the enum constant's key.

### Type Format

```
['enum', { key: Type, value: Type, constants: [key: Data, value: Data][] }]
```

`key` & `value` in constants is not stored in the data format of `[type, value]`, it's strictly the `value`.
