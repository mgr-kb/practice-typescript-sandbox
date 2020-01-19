"use strict";
// boolean
// true or false
let flag = false;
// number
// 浮動小数点値。16, 10, 2, 8進数をサポートしている
let decimal = 256;
let hex = 0xfff;
let binary = 0b0000;
let octal = 0o123;
// string
// 文字列
let color = "red";
// array
// 配列型。表現方法は2種類あり、ブラケット `[]` を使用する、もしくはArray型を使用する方法。
let list = [1, 2, 3];
let list2 = [4, 5, 6];
// tuple
// 固定数の要素の型がわかっている配列を表現できる
let tupleA = ["hoge", 10];
console.log(tupleA[0].substr(1));
// console.log(tupleA[1].substr(1)) <- Property 'substr' does not exist on type 'number'.
// any
// 値の型チェックを無効にする
let whatever = 0;
whatever = "hoge"; // これも許容される
// unknown型
// anyに似ているが、型安全なanyを表したいときに利用する。
// unknownは値の代入には寛容だが、利用には厳しい。
const probablyNum = 0;
// console.log(probablyNum.toFixed(1)) <- Property 'substr' does not exist on type 'number'.
// void型
// 型が全くないことを表す。
// わざわざ指定してもあまり意味はない
function logger(msg) {
    console.log(msg);
}
// null型/undefined型
// これら単体ではあまり役には立たない
// null, undefinedは全ての型のサブタイプであり、全ての型にnull, undefinedを代入できる。
let u = undefined;
let n = null;
// never型
// 発生し得ない値の型を表す
function error(msg) {
    throw new Error(msg);
}
// object型
// 非プリミティブ型を表す型
// boolean, string, number, symbol, null, undefinedのいずれでもない
// なお、ブレース `{}` を使った型表現では、エラーを得ることができない
let objectBrace;
let objectType;
objectBrace = true; // ok
// objectType = false <- Type 'false' is not assignable to type 'object'.
