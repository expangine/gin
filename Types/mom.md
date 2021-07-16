# Moment

**ID**: `mom`  
**System Type**: `Date | string`  
**Sub Types**: *todo*  
**Child Types**: *none*

A moment of time. Can be a particular day or time and time zone or both.

### Examples

- `'yyyy-MM-dd'`
- `'HH:mm'`
- `'HH:mm:ss'`
- `'HH:mm:ss.ZZZ'`
- `'HH:mm TZ'`
- `'yyyy-MM-dd HH:mm TZ'`
- `'****-03-01'`

### Type Options

- `max`: The largest moment component `year | month | date | hour | min | sec | mil`. Default to `year`.
- `min`: The smallest moment component `year | month | date | hour | min | sec | mil`. Default to `mil`.
- `zone`: If the moment has a Time Zone.

### Data Format

```
['mom', '****-**-** **:**:**.*** ***']
```

### Type Format

```
['mom', { max?: year | month | date | hour | min | sec | mil, min?: year | month | date | hour | min | sec | mil, zone?: boolean }]
```

### Thoughts

- Everything before max is * and everything after min is min/maxed.
- When comparing two moments, they are the same if they have matching required components.
- When getting a component from a moment, if it doesn't have it then -1 is returned.
- When setting a component to a moment that doesn't have it - it's type is modified.
- Each moment has in values: months, weeks, days, hours, minutes, seconds, milliseconds
- Each moment has a distance from another. When comparing two the higher level optionals are assumed to be the same, and the lower level ones generate a min/max.
  - Ex: months between '2010' and '2010-01-01' is zero, since the year matches.
  - Ex: months between '2010' and '2012-03-04' is 15.1, since 2010's nearest extent is '2010-12-31 23:59:59.999'
  - Ex: months between '12' and '2012-03' is 9, since the year is assumed to be the same/is ignored.
  - If the extents of two moments overlap, the distance is always zero.
  - Units: second, minute, hour, day, week, month, quarter, year 
- When adding a value to a component that doesn't exist, (add 2 hours to date) use the max of extent (+1ms) as inital value before adding.
  - Ex: add 2 hours to 2021-06-21 = 2021-06-22 02:00:00.000
- When subtracting a value from a component that doesn't exist, use min of extent before subtracting.
- Start/end of moment for component sets the moment value to one of it's extents
  - Ex: start of day `2010-03-04 23` is `2010-03-04 00:00:00.000`
  - Ex: start of day `09:30` is `00:00`
- Is start/end of moment for component compares to extent of date.
- Aliases/additional types  
  - Zoned Timestamp = moment with date, time, and zone
  - Timestamp = moment with date, time
  - Today = moment with date
  - Local Time = moment with time
  - Time = moment with time and zone
