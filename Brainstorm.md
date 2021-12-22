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

**Rules**
1. A function without generics must have an implementation.
2. A function with generics can have specializations for each defined type.
3. A function implementation is determined by taking the value type and searching through the type ancestory for the first implementation. If none exists on the types it defaults to the implementation directly on the function type if any exists. If non exists, an exception is thrown. `Type.getFunctionImplementation(typeValues)`
4 .The function implementations are all defined globally and are loosely related to a type by looking at the type of the first argument.
5. If you use a function like `typeValue->func()` it will use the best function starting at that type. In the editor, you can view the possible implementations it might call and you could try to force a specific one (saved in the expression).
6. For a given function, it should be easy to see all the implementations.
7. A function implementation has a related type then specifies one or many type overloads.

**An environment (ie core library):**
1. List of all core types
2. List of all core functions (instances of the function type, documentation)
3. List of all core function implementations (which function, specialized types, function expression OR native implementation)
4. List of all core unit tests (which function implementation, inputs, expected outputs)

**A project has:**
1. Added and Type specializations
2. Added functions (instances of the function type, documentation)
3. Added and overridden function implementations (which function, specialized types, function expression OR native implementation)
4. Added unit tests (which function implementation, inputs, expected outputs)
5. Reference data (name, type, data)
6. Entity (name, type, description, getKey, getDescribe, transcoders, indexes, primaryType, keyType, instances)
7. Relation (between Entity)
8. Programs (name, description, dataType, datasets, program expression)

And is for a single environment.

**Functionality:**
1. Add project, handle function & type collisions.

**Extensions:**
- Temporal (date & time, intervals)
- Visual (color)
- Geometry (point, line, segment, circle, vector)
- Web (:visual components)
- Game

When talking values, there are JSON value representations, a runtime (JS) value, and a raw value which can be converted to a runtime value.

**Core types**
```
// base
type new        = <T>() => T;                           // required
type cast       = <T, C>(a: T) => C;
type tryCast    = <T, C>(a: T, otherwise: C) => C;
type clone      = <T>(a: T) => T;                       // required
type cloneDeep  = <T>(a: T) => T;
type isType     = <T>(a: any) => a is T;                // required
type isEmpty    = <T>(a: T) => boolean;             
// comparison
type compare    = <T>(a: T, b: T) => number;            // required
type =          = <T>(a: T, b: T) => boolean;           // generic uses compare
type !=         = <T>(a: T, b: T) => boolean;           // generic uses compare
type >          = <T>(a: T, b: T) => boolean;           // generic uses compare
type <          = <T>(a: T, b: T) => boolean;           // generic uses compare
type >=         = <T>(a: T, b: T) => boolean;           // generic uses compare
type <=         = <T>(a: T, b: T) => boolean;           // generic uses compare
// math
type +          = <T>(a: T, b: T) => T;
type -          = <T>(a: T, b: T) => T;
type *          = <T>(a: T, b: T) => T;
type /          = <T>(a: T, b: T) => T;
type negate     = <T>(a: T) => T;
type scale      = <T>(a: T, scale: number) => T;
type divide     = <T>(a: T, divisor: number) => T;
// helper
type Comparable       = <T>{ compare<T> };
type Boolable         = <T>{ cast<T, boolean> };        // if/do/while statements will accept any type which can be cast to boolean
type Condition        = <T>(a: T) => Boolable<T>;
type Consumer         = <T>(a: T) => void;
// collection types
type Iterator         = <V>{ hasNext(): boolean; next(): V; remove(): boolean; }
type Iterable         = <V>{ iterator(): Iterator<V>; }
type Accumulate       = <A, V>(accumulated: A, value: V): A;
type Addable          = <T, V>{ add(target: T, value: V) => any; };
// collection functions
type consume          = <V>(iter: Iterable<V>, consume: Consumer<V>) => void;
type reduce           = <V, A>(iter: Iterable<V>, accum: Accumulate<A, V>, initial: A): A;
type first            = <V>(iter: Iterable<V>) => V?;
type findWhere        = <V>(iter: Iterable<V>, condition: Condition<V>) => V?;
type indexWhere       = <V>(iter: Iterable<V>, condition: Condition<V>, offset?: number) => number;
type indexValue       = <V>(iter: Iterable<V>, value: Comparable<V>, offset?: number) => number;
type countWhere       = <V>(iter: Iterable<V>, condition: Condition<V>) => number;
type countValue       = <V>(iter: Iterable<V>, value: Comparable<V>) => number;
type hasWhere         = <V>(iter: Iterable<V>, condition: Condition<V>) => boolean;
type hasValue         = <V>(iter: Iterable<V>, value: Comparable<V>) => boolean;
type filter           = <V, T: Addable<T, V>>(iter: Iterable<V>, condition: Condition<V>, target: T) => T;
type clear            = <V>(iter: Iterable<V>) => number;
type removeWhere      = <V>(iter: Iterable<V>, condition: Condition<V>) => number;
type removeValue      = <V>(iter: Iterable<V>, value: Comparable<V>, maxTimes: number = -1) => number;
type removeAt         = <V>(iter: Iterable<V>, index: number) => boolean;
```

**Type:**
- `options`: Each base type can have options for type instances to be more specific/constrained.
- `merge(sameType)`: Types of the same type can be merged together.
- `getSubType(expr, context, defs)`: Determine sub type if possible given an expression.
- `getSubTypes(defs)`: All key and value types available for obtaining a sub-value.
- `getChildType(nameIndex)`: A sub type with the given name/index.
- `getChildTypes()`: All defined sub types.
- `getExactType(value)`: Given a raw value & if this type represents multiple, return the matching type.
- `getSimplifiedType()`: For types which wrap others, what is the real type for the values.
- `getRequired()`: For a type which is optional, return the non-optional version.
- `isWrapper()`: If a type wraps another type.
- `getWrappedType()`: The wrapped type.
- `isDeepCompatible(other, options)`: If the other type is deeply compatible with this type given the options.
- `acceptsOtherTypes()`: Returns true if when comparing compatibility deep compatibility should be checked.
- `acceptsType(givenType)`: If this type's value accepts the given type's value.
- `acceptsData(givenType)`: If this type's data accepts the given type's value.
- `exactType(givenType)`: If this type is an exact match for the given type.
- `exactData(givenType)`: If this type's data is an exact match for the given type's data.
- `isOptional()`: Does this type accept optional values?
- `isSimple()`: Does this type represent a simple scalar value?
- `isValid(rawValue)`: Is the given raw value valid for this type?
- `normalize(rawValue)`: Given a value transform it into a valid raw value.
- `newInstance()`: A new instance of this type with the no options.
- `clone()`: A new instance of this type with the same options.
- `encode()`: Converts this type definition into JSON.
- `decode(value)`: Converts JSON into a a type instance.
- `create()`: Creates a raw value of this type.
- `random(randomizer)`: Creates a raw random value of this type.
- `fromJson(jsonValue)`: Creates a value of this type from a JSON value.
- `toJson(value)`: Creates a JSON value from a raw value.
- _following are new_
- `getFunctions(defs)`: Get a list of functions available for this type.
- `getGenerics()`: Get a list of the generics on this type and their types if any.
