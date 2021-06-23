# Number

**ID**: `num`  
**System Type**: `number`  
**Sub Types**: *none*  
**Child Types**: *none*  

A signed numeric value that can have a whole and fractional part.

### Examples

- `1`
- `-2.3`
- `0.001`

### Type Options

- `min`: The minimum valid value.
- `max`: The maximum valid value.
- `precision`: A restriction on how many digits beyond the decimal are stored in this type. A precision of zero results in whole numbers only.

### Data Format

```
['num', number]
```

### Type Format

```
['num', { min?: number, max?: number, precision?: number }?]
```
