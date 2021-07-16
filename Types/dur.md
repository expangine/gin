# Duration

**ID**: `dur`  
**System Type**: `object`
**Sub Types**: *todo*  
**Child Types**: *none*

A duration of time.

### Examples

- `{ years: 1, months: 2 }`
- `{ hours: 2, minutes: 4 }`
- `{ years: 0, quarters: 3, months: 0, weeks: 2, days: 3, hours: 0, minutes: 1, seconds: 3, millis: 0 }`

### Type Options

- `years`: If year is an acceptable component of the duration. Default to `true`.
- `quarters`: If quarters is an acceptable component of the duration. Default to `true`.
- `months`: If months is an acceptable component of the duration. Default to `true`.
- `weeks`: If weeks is an acceptable component of the duration. Default to `true`.
- `days`: If days is an acceptable component of the duration. Default to `true`.
- `hours`: If hours is an acceptable component of the duration. Default to `true`.
- `minutes`: If minutes is an acceptable component of the duration. Default to `true`.
- `seconds`: If seconds is an acceptable component of the duration. Default to `true`.
- `millis`: If millis is an acceptable component of the duration. Default to `true`.

### Data Format

```
['dur', { years?: number, quarters?: number, months?: number, weeks?: number, days?: number, hours?: number, minutes?: number, seconds?: number, millis?: number }]
```

### Type Format

```
['dur', { years?: boolean, quarters?: boolean, months?: boolean, weeks?: boolean, days?: boolean, hours?: boolean, minutes?: boolean, seconds?: boolean, millis?: boolean }]
```
