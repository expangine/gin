Gin is a modern programming language designed for a visual programming experience. Data, types, and code are stored as JSON.

## Features

**Common features**
- Strict type system
- Algebraic data types
- Type inference
- Generics
- Functions are first-class objects
- Interface system
- Operators can be redefined for classes (operator overloading), and new operators can be defined.
- System types
  - Primitive: any, boolean, date, number, text
  - Composite: enum, object, tuple, list, map, set
  - Algebraic: tuple, many, not
  - Other: function, optional, null, user-defined type, global data reference

**Unique to Gin**
- Automatic refactoring of data, functions, and programs when data types are changed
- Transparent algorithmic and memory complexity for all operations and functions
- Documentation/comments can be attached to types & expressions
- User specified unit testing for any function/operation
- Easily refactor any expression into a reusable function
- Stored as JSON and could be parsed by any language and transformed into a callable function or code in another language
- Type changes generate data migration expressions

**Comparable Languages**
- Swift: Gin allows modifying system types and operator overloading.
- Go: Gin has a similar type system but with generics. 

## Intro

Gin is composed of 3 core objects: Types, Expressions, and Data.

- **Types**: A data type. Ex: number, text, date, object, list, etc.
- **Expressions**: Code. Can also have data embedded in it (ex: constants).
- **Data**: User data for a known type. May also contain function expressions.

More complex objects in Gin are defined by the 3 core objects:

- **Operation**: A function type that can be implemented for any supported type.
- **Operation Implementation**: An expression that implements an operation for a given type.
- **Function**: A function type and implementation expression. Can be invoked from anywhere and can be unit tested.
- **Reference Data**: A type & data pair that is accessible in any function/program.
- **Program**: A type defines one or more input datasets with an expression that can be ran.

## Storage

All three are stored as a JSON tuple in the following format: `[id, payload, comment?]`.

- **Types**: `[id: string, options?: object, comment?: string]`. There are system defined ids, but the user can create new types.
- **Expressions**: `[id: string, options: object, comment?: string]`. All ids are system defined, no custom expressions.
- **Data**: `[typeId: string, value: any]`. The id always points to a defined type.

### Pros
- Types, data, and expressions can easily be saved or sent anywhere.
- Common format that all languages can easily parse.

### Cons
- Not easy to write by hand.

## Types

- **Number**: Ex: 1, -2.3, 0.001
  - Data: `['num', 23]`
  - Type: `['num', { min?: number, max?: number, whole?: boolean, precision?: number }]`
- **Text**: A string. Ex: 'Hello'
  - Data: `['text', 'Hello World']`
  - Type: `['text', { case?: 'upper' | 'lower', caseForce?: boolean, caseRequire?: boolean, min?: number, max?: number, matches?: RegExp }]`
- **Boolean**: A true/false value.
  - Data: `['bool', true]`
  - Type: `['bool', { truthy?: any[], falsy?: any[] }]`
- **Enum**: A set of key/value constants. 
  - Data: `['enumName', 23]`
  - Type: `['enumName', [['Yes', 23], ['No', 24]]]`
- **Object**: A user defined set of properties and values.
  - Data: `['obj', { x: 4, y: 'no' }]`
  - Type: `['obj', { x: ['num'], y: ['text'] }]`
- **Tuple**: A user defined set of elements. Ex: `[3, 'hi'], [1, 2, 3], ['hi', { x: 5 }]`
  - Data: `['tup', [1, true, 'OK']]`
  - Type: `['tup', [['num'], ['bool'], ['text']]]`
- **List**: An array of values.
  - Data: `['list', [1, 2, 3, 4]]`
  - Type: `['list', { item: ['num'], min?: number, max?: number }]`
- **Set**: A collection of unique values.
  - Data: `['set', [1, 2, 3, 4]]`
  - Type: `['set', { item: ['num'] }]`
- **Map**: A collection of key/values.
  - Data: `['map', [['x', 1], ['y', 2]]`
  - Type: `['map', { key: ['text'], value: ['num'] }]`
- **Date**: A date and optionally time.
  - Data: `['date', 'yyyy-mm-dd']`
  - Type: `['date', { date?: boolean, time?: boolean, zone?: boolean, seconds?: boolean }]`
- **Color**: A color with red, green, blue, and alpha components.
  - Data: `['color', [255, 127, 255, 1.0]]`
  - Type: `['color', { alpha?: boolean }]`
- **Optional**: A type that isn't required, has an inner type.
  - Data: ` `
  - Type: `['?', ['text']]`
- **Function**: A type which describes a functions parameters and return type.
  - Data: `['func', expr]`
  - Type: `['func', { generics?: string[], params?: { paramName: ['type'] }, returns?: }]`
- **Many**: A type which accepts multiple types.
  - Data: `['num', 12]`
  - Type: `['many', [['num']]]`
- **Not**: A type which accepts any type but specified types.
  - Data: `['num', 12]`
  - Type: `['not', [['text']]]`
- **Null**: A type to represent no value.
  - Data: `['null']`
  - Type: `['null']`
- **Reference**: A type that references a user-defined type.
  - Data: `['typeName', value]`
  - Type: `['typeName', type]`
- **Any**: A type that's compatible with all types.
  - Data: `any`
  - Type: `['any']`
- **Generic**: A type used a placeholder to create generic functions.
  - Type: `['T']`

## Expressions

- **And**: Combine multiple expressions together and return true if they all returned a truthy value.
  - Code: `['and', [expr0, expr1, ...], comment?: string]`
- **Assert**: If a condition is not true then the program will halt execution and fail with the given message.
  - Code: `['assert', { condition: expr, message: string }]`
- **Chain**: Execute multiple expressions in the given order. Return the result of the last one.
  - Code: `['chain', [expr0, expr1, ...]]]`
- **Computed**: 
  - Code: `['computed', 'propertyName']`
- **Constant**: 
  - Code: `[constant, value]`
- **Define**: 
  - Code: `[define, { vars[], body }]`
- **Do**: 
  - Code: `[do, { condition, body }]`
- **Flow**: 
  - Code: `[flow, { type, value? }]`
- **For**: 
  - Code: `[for, { var, start, end, by }]`
- **Function**: 
  - Code: `[func, { args, body }]`
- **Get**: 
  - Code: `[get, prop]`
- **GetData**: 
  - Code: `[getdata, dataname]`
- **If**: 
  - Code: `[if, ]`
- **Invoke**:
  - Code: 
- **Method**:
  - Code: 
- **No**:
  - Code: 
- **Not**:
  - Code: 
- **Object**:
  - Code: 
- **Operation**:
  - Code: 
- **Or**:
  - Code: 
- **Path**:
  - Code: 
- **Set**:
  - Code: 
- **Switch**:
  - Code: 
- **Template**:
  - Code: 
- **Tuple**:
  - Code: 
- **While**:
  - Code: `['while', { condition, body }]`
