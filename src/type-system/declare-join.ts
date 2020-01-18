// 宣言の結合
// TSには型宣言を結合する概念がある。
// 例として、JSが備えるNativeAPIの型定義がそうで、tsconfigのcompilerOption.targetを切り替えると
// Targetに準拠した宣言の結合がTSによって自動で行われる。

// 宣言空間(declaration type)
// Value(値), Type(型), Namespace(名前空間)の3つのグループがあり、それぞれの定義は異なる宣言空間にアサインされる。
const Test = {}; // Value
interface Test {} // Type
namespace Test {} // Namespace

// Value宣言空間
// 変数や関数の宣言空間は、Valueに割り当てられる。宣言空間で重複した宣言は、コンパイルエラーになる
const dValue1 = "test";
let dValue2 = "test";
// function great() {} // -> Duplicate identifier 'great'.
// const great = 'hello' // -> Duplicate identifier 'great'.

// Type宣言空間
// 型を宣言するには、interface, type aliasを用いるが、「open ended」に準拠しているかどうかという違いがある。
// interfaceは準拠しているので、以下のように宣言することで「型拡張(オーバーロード)」が可能
interface dUser {
  name: string;
}
interface dUser {
  age: number;
}
// 最終的には、nameとageプロパティが結合されて、一つのdUserというinterfaceになる

// 一方でtype aliasはopen endedに準拠していない
// 宣言空間はinterfaceと同様にTypeに割り振られるため、同一名称の型宣言をも試みると失敗する
// type dtUser = { // -> Duplicate identifier 'dtUser'.
//   name: string
// }
// type dtUser = { // -> Duplicate identifier 'dtUser'.
//   age: number
// }

// Namespace宣言空間
// Namespace宣言空間内において型定義をエクスポートすると、ドットでつなぐ型参照が可能になる
interface nTest {
  value: string;
}
namespace nTest {
  export interface Properties {
    name: string;
  }
}
// interfaceの型の付与
const test: nTest = {
  value: "value"
};
// 名前空間が保持する型の付与
const properties: nTest.Properties = {
  name: "Taro"
};

// namespaceの結合に関して
// 例えばライブラリの型定義について、declare globalなどでglobalに宣言されているものであれば、
// namespace内のinterfaceをexportしてなくとも、オーバーロードが可能になる。
