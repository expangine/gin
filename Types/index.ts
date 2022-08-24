type GinValue = [type: string, data: any, comment: string?];
type GinType = GinValue;
type GinExpr = GinValue;
type GinExprs = GinExpr[];
type GinExprMap = { [key: string]: GinExpr };
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
type And: GinExpr = ['and', GinExprs];
type Assert: GinExpr = ['assert', { condition: GinExpr, message: GinExpr }];
type Chain: GinExpr = ['chain', GinExprs];
type Constant: GinExpr = ['constant', GinData];
type Define: GinExpr = ['define', { vars: [string, GinExpr][], body: GinExprs }];
type Do: GinExpr = ['do', { condition: GinExpr, body: GinExprs }];
type Flow: GinExpr = ['flow', { type: 'break' | 'return' | 'exit', value?: GinExpr }];
type For: GinExpr = ['for', { var: string, start: GinExpr, end: GinExpr, by?: GinExpr, endInclusive?: boolean, body: GinExprs }];
type Func: GinExpr = ['func', { args: GinTypeMap, body: GinExprs }];
type Get: GinExpr = ['get', GinExprs];
type If: GinExpr = ['if', { ifs: [GinExpr, GinExprs][], else: GinExprs ]];
type Invoke: GinExpr = ['invoke', { func: string, args: GinExprMap }];
type Method: GinExpr = undefined;
type No: GinExpr = ['no'];
type Not: GinExpr = ['not', GinExpr];
type Make: GinExpr = ['make', GinType];
type Operation: GinExpr = ['op', 'TODO'];
type Or: GinExpr = ['or', GinExprs];
type Path: GinExpr = undefined;
type Set: GinExpr = ['set', { path: GinExprs, value: GinExpr }];
type Switch: GinExpr = ['switch', { value: GinExpr, cases: [GinExpr, GinExprs][], otherwise?: GinExprs }];
type Template: GinExpr = ['template', { pattern: GinExpr, vars: GinExprMap }];
type While: GinExpr = ['while', { condition: GinExpr, body: GinExprs }];
