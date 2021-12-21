Signatures (function types) are defined globally.

Examples:

```go
type toString         = <T>(this: T): string                 // is cast type T to string
type toBoolean        = <T>(this: T): boolean                // is cast type T to boolean
type lerp             = <T>(start: T, end: T, delta): T      // is linear interpolation between start and end
type +                = <T>(this: T, addend: T): T           // add operator
type random           = (): number                           // is random number >= 0 and < 1
type Iterator         = <V>{ hasNext(): boolean; next(): V }
type Iterable         = <V>{ iterator(): Iterator<V>; }
type ReduceAccumulate = <A, V>(accumulated: A, value: V): A
type reduce           = <V, A>(iter: Iterable<V>, accum: ReduceAccumulate<A, V>, initial: A): A
```

They are considered related to a type if they have a generic type as first argument.

```
[]->reduce(accum)
0->toString
{x, y}->lerp( {x, y}, 0.5 )
```

Rules
1. A function without generics must have an implementation.
2. A function with generics can have specializations for each defined type.
3. A function implementation is determined by taking the value type and searching through the type ancestory for the first implementation. If none exists on the types it defaults to the implementation directly on the function type if any exists. If non exists, an exception is thrown. `Type.getFunctionImplementation(typeValues)`
4 .The function implementations are all defined globally and are loosely related to a type by looking at the type of the first argument.
5. If you use a function like `typeValue->func()` it will use the best function starting at that type. In the editor, you can view the possible implementations it might call and you could try to force a specific one (saved in the expression).
6. For a given function, it should be easy to see all the implementations.
7. A function implementation has a related type then specifies one or many type overloads.

The core library has:
1. List of all core types
2. List of all core functions (instances of the function type, documentation)
3. List of all core function implementations (which function, specialized types, function expression OR native implementation)
4. List of all core unit tests (which function implementation, inputs, expected outputs)

A project has:
1. Added and Type specializations
2. Added functions (instances of the function type, documentation)
3. Added and overridden function implementations (which function, specialized types, function expression OR native implementation)
4. Added unit tests (which function implementation, inputs, expected outputs)
5. Reference data (name, type, data)
6. Entity (name, type, description, getKey, getDescribe, transcoders, indexes, primaryType, keyType, instances)
7. Relation (between Entity)
8. Programs (name, description, dataType, datasets, program expression)

Functionality:
1. Add project, handle function & type collisions.
