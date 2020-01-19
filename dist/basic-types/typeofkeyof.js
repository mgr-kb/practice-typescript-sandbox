"use strict";
// typeofキーワード
// 宣言済み変数の型を取得する
// 型クエリと呼ばれるもので、関数や外部モジュールなどの型キャプチャを取得する
// JSのtypeofとは別物
let asString = "";
let strValue; // asStringの型を取得することで、string型としている
strValue = "hoge";
// 有効に使えるのは型推論と組み合わせた時
let myObject = { foo: "foo" };
let anotherObject = { foo: "" }; // fooプロパティのvalue型がstringのObjectを定義していることになる
anotherObject["foo"] = "value";
let someKey; // -> let someKey: "foo" | "bar"
