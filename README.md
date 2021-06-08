Gin is a modern programming language designed for a visual programming experience. Data, types, and code are stored as JSON making it very consumable.

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

All three are stored as a JSON tuple in the following format: `['id', ...payload]`.

- **Types**: `[id: string, options?: object, comment?: string]`. There are system defined ids, but the user can create new types.
- **Expressions**: `[id: string, options: object, comment?: string]`. All ids are system defined, no custom expressions.
- **Data**: `[typeId: string, value: any]`. The id always points to a defined type.

## Types

- **Number**: Ex: 1, -2.3, 0.001
- **Text**: A string. Ex: 'Hello'
- **Boolean**: A true/false value.
- **Enum**: A set of key/value constants. Ex: `Top=0, Bottom=1, Right=2, Left=3`
- **Object**: A user defined set of properties and values. Ex: `{ age: 32, name: 'Phil' }`
- **Tuple**: A user defined set of elements. Ex: `[3, 'hi'], [1, 2, 3], ['hi', { x: 5 }]`
- **List**: An array of values. Ex: `['a', 'b', 'c', 'd', 'a']`
- **Set**: A collection of unique values. Ex: `[1, 2, 3]`
- **Map**: A collection of key/values.
- **Date**: A date and optionally time.
- **Color**: A color with red, green, blue, and alpha components.
- **Optional**: A type that isn't required, has an inner type.
- **Function**: A type which describes a functions parameters and return type.
- **Many**: A type which accepts multiple types.
- **Not**: A type which accepts any type but specified types.
- **Null**: A type to represent no value.
- **Reference**: A type that references a user-defined type.
- **Any**: A type that's compatible with all types.
- **Generic**: A type used a placeholder to create generic functions.

## Expressions

