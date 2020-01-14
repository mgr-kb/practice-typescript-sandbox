// typeofキーワード
// 宣言済み変数の型を取得する
// 型クエリと呼ばれるもので、関数や外部モジュールなどの型キャプチャを取得する
// JSのtypeofとは別物
let asString: string = "";
let strValue: typeof asString; // asStringの型を取得することで、string型としている
strValue = "hoge";

// 有効に使えるのは型推論と組み合わせた時
let myObject = { foo: "foo" };
let anotherObject: typeof myObject = { foo: "" }; // fooプロパティのvalue型がstringのObjectを定義していることになる
anotherObject["foo"] = "value";
// anotherObject["foo"] = false; -> Type 'false' is not assignable to type 'string'.

// keyofキーワード
// オブジェクトのプロパティ名称をString LiteralUnion Typesで取得可能
type SomeType = {
  foo: string;
  bar: string;
};

let someKey: keyof SomeType; // -> let someKey: "foo" | "bar"
