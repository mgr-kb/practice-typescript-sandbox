"use strict";
// アップキャスト, ダウンキャスト
// 推論される型よりも詳細な型が自明な場合(プログラマがコンパイラよりも型に詳しい場合)
// 型を確約するためにアサーション(as)で型宣言を行います
// 抽象的な型から詳細な型を付与することを「ダウンキャスト」
const defaultTheme = {
    backgroundColor: "orange",
    borderColor: "red"
};
// 抽象度をあげる型の付与を「アップキャスト」
// 抽象度をあげるならば型が緩くなるということなので危険ではないかのようで、危険な場合もある
function toNumber(value) {
    return value;
}
const fiction = toNumber("1000");
fiction.toFixed(); // runtime error
// 上記の例だと、toNumberの返却型をanyにアップキャストしているため、
// fiction変数はnumber型であったはずにも関わらず、文字列が渡されると、
// number型の関数が実行された時に危険
