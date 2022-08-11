type GinValue = [type: string, data: any, comment: string?];
type GinType = GinValue;
type GinExpr = GinValue;
type GinData = GinValue;
type GinTypeMap = { [key: string]: GinType };

//===================================================================
// Types & Data
//===================================================================

type AnyType: GinType = ['any'];
// not a type which has a value, just a placeholder type

type BoolType: GinType = ['bool', { trues?: GinData[], falses?: GinData[] }];
type BoolData: GinData = [boolType: string, value: any];
const BoolValue: BoolData = ['bool', true];

type ColorType: GinType = ['color', { space?: 'rgb' | 'cmyk' | 'hsl' | 'hsv', alpha?: boolean }];
type ColorData: GinData = [colorType: string, components: number[]];
const ColorValue: ColorData = ['color', [255, 127, 0]];

type DurationType: GinType = ['dur', { years?: boolean, quarters?: boolean, months?: boolean, weeks?: boolean, days?: boolean, hours?: boolean, minutes?: boolean, seconds?: boolean, millis?: boolean }];
type DurationData: GinData = [durationType: string, units: { years?: number, quarters?: number, months?: number, weeks?: number, days?: number, hours?: number, minutes?: number, seconds?: number, millis?: number }];
const DurationValue: DurationData = ['dur', { years: 18 }];

type EnumType: GinType = ['enum', { key: GinType, value: GinType, constants: [key: GinData, value: GinData][] }];
type EnumData: GinData = [enumType: string, enumKey: any];
const EnumValue: EnumData = ['myEnum', 'enumKey'];

type ListType: GinType = ['list', { item: GinType, min?: number, max?: number, unique?: boolean, sorted?: boolean }];
type ListData: GinData = [listType: string, items: GinData[]];
const ListValue: ListData = ['myNumbers', [['num', 1], ['num', 2], ['money', 3]];
                             
type ManyType: GinType = ['many', { types: GinType[] }];
// not a type which has a value, just a placeholder type

type MapType: GinType = ['map', { key: GinType, value: GinType, sorted?: 'key' | 'value' }];
type MapData: GinData = [mapType: string, entries: [GinData, GinData][]];
const MapValue: MapData = ['myMap', [[ ['text', 'A'], ['num', 2] ], [ ['text', 'B'], ['num', 3] ]]];

type MomentComponent = 'year' | 'month' | 'date' | 'hour' | 'minute' | 'second' | 'millisecond';
type MomentType: GinType = ['mom', { max?: MomentComponent, min?: MomentComponent, zoned?: boolean }];
type MomentData: GinData = [momentType: string, { max: 'hour', min: 'second' }]; // HH:mm:ss
const MomentValue: MomentData = ['mom', '23:45:56'];

type NotType: GinType = ['not', { types: GinType[] }];
// not a type which has a value, just a placeholder type

type NullType: GinType = ['null'];
type NullData: GinData = ['null'];
const NullValue: NullData = ['null'];

type NumberType: GinType = ['num', { min?: number, max?: number, precision?: number }?];
type NumberData: GinData = [numberType: string, value: number];
const NumberValue: NumberData = ['num', 23.4];

type ObjectType: GinType = ['obj', { [property: string]: GinType }];
type ObjectData: GinData = [objectType: string, value: { [property: string]: GinData }];
const ObjectValue: ObjectData = ['point', { x: ['num', 23], y: ['num', 5.6] }];

type OptionalType: GinType = ['?', GinType];
// not a type which has a specific value, just a placeholder type for a type which might have a value

type TextType: GinType = ['text', { min?: number, max?: number, case?: 'upper' | 'lower', matches?: RegExp }?];
type TextData: GinData = [textType: string, value: string];
const TextValue: TextData = ['text', 'Hello Gin!'];

type TupleType: GinType = ['tuple', GinType[]];
type TupleData: GinData = [tupleType: string, GinData[]];
const TupleValue: TupleData = ['myTuple', [['num', 2], ['text', 'Hi']]];

type GenericType: GinType = ['generic', string];
// not a type which has a value, just a placeholder type

type FuncType: GinType = ['func', { generics: GinTypeMap, params: GinTypeMap, result: GinType }];
type FuncData: GinData = [functionType: string, GinExpr];

type InterfaceType: GinType = ['interface', { generics: GinTypeMap, shape: GinTypeMap }];
// An interface { getMessage: () => string } can accept a type with that method defined or a raw object with that defined

//===================================================================
// Expressions
//===================================================================
type And: GinExpr = ['and', GinExpr[]];
type Assert: GinExpr = ['assert', { condition: GinExpr, message: GinExpr }];
type Chain: GinExpr = ['chain', GinExpr[]];
type Constant: GinExpr = ['constant', GinData];
type Define: GinExpr = ['define', { vars: GinExpr[], body: GinExpr[] }];
type Do: GinExpr = ['do', { condition: GinExpr[] }];
type Flow: GinExpr = ['flow', { type: 'break' | 'return' | 'exit', value?: any }];
type For: GinExpr = ['for', { var: string, start: GinExpr, end: GinExpr, by?: GinExpr, endInclusive?: boolean }];
type Func: GinExpr = ['func', { args: GinTypeMap, body: GinExpr[] }];
type Get: GinExpr = ['get', (GinExpr | string)[]];
type If: GinExpr = ['if', [GinExpr, GinExpr[]][]];
type Invoke: GinExpr = undefined;
type Method: GinExpr = undefined;
type No: GinExpr = undefined;
type Not: GinExpr = undefined;
type Make: GinExpr = undefined;
type Operation: GinExpr = undefined;
type Or: GinExpr = undefined;
type Path: GinExpr = undefined;
type Set: GinExpr = undefined;
type Switch: GinExpr = undefined;
type Template: GinExpr = undefined;
type While: GinExpr = undefined;
