// 型の互換性
// TypeScriptがどのような観点で互換性を判断しているのか

// stringとString Literal Typesの互換性 (number型なども同様である。)
// Literal Typesの変数を、比較して抽象度の高いstringに代入するのは問題なし。
let s1: "test" = "test";
let s2: string = s1; // Errorなし
// stringの変数を、比較して抽象度の深いLiteral Typesの変数に代入するとエラーになる。
let s3: string = "test";
// let s4: 'test' = s3 // -> Type 'string' is not assignable to type '"test"'

// any型の互換性
let a1: any = false;
let a2: string = a1; // stringの'false'になる
let a3 = a1 as number; // anyに対するアサーションなのでコンパイルエラーは出ない。利用の際にランタイムエラーになるはず。

// unknown型の互換性
// どんな型の値も受け入れることができるTop Typeである。型の中でもっとも抽象的な型です
// anyと異なり、型が決定するまで別の型に代入できない
let un1: unknown = "test";
// let un2: string = un1 // -> Type 'unknown' is not assignable to type 'string'.
let un3: number = un1 as number; // assetionによりnumber型となるためコンパイルエラーにならない。

// 互換性のないアサーション
// 値と互換性のない型宣言を試みると失敗する
const ss1 = "0";
const ss2 = "0" as string;
// const ss3 = 0 as string // -> error!
const ss4 = "0" as {}; // OKらしい

// {}型の互換性
// {}型はobject型とは別モノ。
// プリミティブ(object)は{}のサブタイプ。
let o1: {} = 0;
let o2: {} = "1";
// let oo1: object = 0 // -> Type '0' is not assignable to type 'object'.
// let oo2: object = '1' // -> Type '0' is not assignable to type 'object'.

// keyofで確認する。
// keyof = 型プロパティの名称一覧を抽出するキーワード
type k0 = keyof {}; // type k0 = never
type k1 = keyof { K: "K" }; // type k1 = "K"
type k2 = keyof 0; // type k2 = "toString" | "toFixed" | "toExponential" | "toPrecision" | "valueOf" | "toLocaleString"
type k3 = keyof "1"; // type k3 = number | "toString" | "charAt" | "charCodeAt" | "concat" | "indexOf" | "lastIndexOf" | "localeCompare" | "match" | "replace" | "search" | "slice" | "split" | "substring" | "toLowerCase" | ... 25 more ... | "sup"
type k4 = keyof false; // type k4 = "valueOf"

// プロパティとか関数型, クラスの互換性に関する部分はまあわかる
// 構造的部分型
