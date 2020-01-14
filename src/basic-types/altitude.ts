// Intersection Types
// 交差タイプ
// 複数の型を1つに結合します(&を使うことで実現可能)
// プリミティブ型もIntersection Typesで記述できるが、これは役に立たない。
// => 例えば、stringとnumberという型の両方を満たすものは存在しない。
type Dog = {
  tail: Object;
  bark: () => void;
};

type Bird = {
  wing: Object;
  fly: () => void;
};

type Kimera = Dog & Bird;

// Union Types
// 共用タイプ
// 複数の型のうちの1つの型が成立することを示している (|を使うことで実現可能)
// 以下はいずれの代入もエラーにならないはず。
let value: string | boolean | number;
value = "hoge";
value = true;
value = 1;

// Array型に含む要素をUnion Typesで表現する場合は、()をつけて1つの型として表す
let numOrStr: (number | string)[];
numOrStr = [0, "1"];

// Union Typesを用いたNullable型の表現
let nullabelString: string | null;
nullabelString = null;
nullabelString = "str";

// Literal Types

// String Literal Types
// 文字列リテラルを利用すると、文字列に必要な正確な値を指定できる(例えば、型に'Taro'と指定すると、値には'Taro'しか表現できない)
// String Literal Typesはstring型のサブタイプであるため、文字列が持つ関数にアクセス可能
let myName: "Taro";
myName = "Taro";
// String Literal TypesとUnion Typesを用いると、定数のように扱うことが可能。
let users: "Taro" | "Jiro" | "Saburo";

// Numeric Literal Types
// 数値リテラルを使用すると、数値として正確な値を指定できる。
// 文字列リテラルの数値バージョン。
let zero: 0;
zero = 0;
// zero = 1 -> Type '1' is not assignable to type '0'.

// Boolean Literal Types
// 真偽値リテラルを使用すると、真偽値として正確な値を指定できる。
// 他と同じようなものなので割愛
