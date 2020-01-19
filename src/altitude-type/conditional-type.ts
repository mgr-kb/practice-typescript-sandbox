// Conditional Types
// 型の互換性を条件分岐にかけ、型推論を導出する型のこと

// 型の条件分岐
// Conditional Typesは、'T extends X ? Y : Z'という構文で表される
// T型とX型が互換性がある場合、Y型、そうでない場合はZ型が適用される。
type IsString<T> = T extends string ? true : false;
type X = IsString<"test">; // type X = true
type Y = IsString<1>; // type Y = false

// Mapped Typesでの利用
interface Properties {
  name: string;
  age: number;
  flag: boolean;
}
type IsType<T, U> = {
  [K in keyof T]: T[K] extends U ? true : false;
};
type IsString2 = IsType<Properties, string>; // type IsString2 = { name: true; age: false; flag: false; }
type IsNumber = IsType<Properties, number>; // type IsNumber = { name: false; age: true; flag: false; }
type IsBoolean = IsType<Properties, boolean>; // type IsBoolean = { name: false; age: false; flag: true; }

// 条件に適合した型を抽出する型
// 該当するプロパティ名称のみをUnion Typesで得る型
// プロパティ名称に相当するK型を返却し、末尾に[keyof T]を付与すると、この型を得ることができる
interface UProperties {
  name: string;
  age: number;
  walk: () => void;
  jump: () => Promise<void>;
}
type Filter<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

type StringKeys = Filter<UProperties, string>; // type StringKeys = "name"
type NumberKeys = Filter<UProperties, number>; // type NumberKeys = "age"
type FunctionKeys = Filter<UProperties, Function>; // type FunctionKeys = "walk" | "jump"
type ReturnPromiseKeys = Filter<UProperties, () => Promise<any>>; // type ReturnPromiseKeys = "jump"

// 一致するプロパティ名から型を生成
// 組み込みのUtility TypeであるPick型から生成
type PStringKeys<T> = Filter<T, string>;
type PNumberKeys<T> = Filter<T, number>;
type PFunctionKeys<T> = Filter<T, Function>;
type PReturnPromiseKeys<T> = Filter<T, () => Promise<any>>;

type Strings = Pick<UProperties, PStringKeys<UProperties>>; // type Strings = { name: string; }
type Numbers = Pick<UProperties, PNumberKeys<UProperties>>; // type Numbers = { age: number; }
type Functions = Pick<UProperties, PFunctionKeys<UProperties>>; // type Functions = { walk: () => void; jump: () => Promise<void>; }
type ReturnPromises = Pick<UProperties, PReturnPromiseKeys<UProperties>>; // type ReturnPromises = { jump: () => Promise<void>; }

// 条件分岐で得られる確約
// 型の条件分岐が成立した場合、Indexed Access Typesによる型参照が可能になる
// 次の型を例にDeepNest型を抽出する
interface DeepNest {
  deep: { nest: { value: string } };
}
interface ShallowNest {
  shallow: { value: string };
}
interface NestProperties {
  deep: DeepNest;
  shallow: ShallowNest;
}
type Salvage<T extends DeepNest> = T["deep"]["nest"]["value"];
type DeepDive<T> = {
  [K in keyof T]: T[K] extends DeepNest ? Salvage<T[K]> : never;
};
type X1 = DeepDive<NestProperties>; // type X1 = { deep: string; shallow: never; }

// 部分的な型抽出
// inferシグネチャを用いることで、部分的な型抽出が可能になる (Type Inference in Conditional Types)
// 以下の例だと
// greetという'Hello'を返す関数がある
// Return型の動き的には、 '(...args: any[]) => infer U' という、"関数型かつ、戻り型(U)がある"型であれば、その戻り型を返すという意味になる
//
function greet() {
  return "Hello!";
}
type Return<T> = T extends (...args: any[]) => infer U ? U : never;
type R = Return<typeof greet>; // type R = string

// 引数型の抽出
function greet2(name: string, age: number) {
  return `Hello, I'm ${name}. ${age} years old.`;
}

// '関数型かつ第一引数がある'場合、第一引数の型を返却する
type A1<T> = T extends (...args: [infer U, ...any[]]) => any ? U : never;
// '関数型かつ第二引数がある'場合、第二引数の型を返却する
type A2<T> = T extends (...args: [any, infer U, ...any[]]) => any ? U : never;
// '関数型'の場合、引数をTuple型で返却する
type A3<T> = T extends (...args: infer U) => any ? U : never;

type XA1 = A1<typeof greet2>; // type XA1 = string
type XA2 = A2<typeof greet2>; // type XA2 = number
type XA3 = A3<typeof greet2>; // type XA3 = [string, number]

// Promise.resolve引数型の抽出
async function greetPromise() {
  return "Hello";
}
type ResolveArg<T> = T extends () => Promise<infer U> ? U : never;
type XP1 = typeof greetPromise; // -> type XP1 = () => Promise<string>
type XP2 = ResolveArg<typeof greetPromise>; // -> type XP2 = string
