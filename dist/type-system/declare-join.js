"use strict";
// 宣言の結合
// TSには型宣言を結合する概念がある。
// 例として、JSが備えるNativeAPIの型定義がそうで、tsconfigのcompilerOption.targetを切り替えると
// Targetに準拠した宣言の結合がTSによって自動で行われる。
// 宣言空間(declaration type)
// Value(値), Type(型), Namespace(名前空間)の3つのグループがあり、それぞれの定義は異なる宣言空間にアサインされる。
const Test = {}; // Value
// Value宣言空間
// 変数や関数の宣言空間は、Valueに割り当てられる。宣言空間で重複した宣言は、コンパイルエラーになる
const dValue1 = "test";
let dValue2 = "test";
// interfaceの型の付与
const test = {
    value: "value"
};
// 名前空間が保持する型の付与
const properties = {
    name: "Taro"
};
// namespaceの結合に関して
// 例えばライブラリの型定義について、declare globalなどでglobalに宣言されているものであれば、
// namespace内のinterfaceをexportしてなくとも、オーバーロードが可能になる。
