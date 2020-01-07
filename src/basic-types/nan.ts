// NaNを防ぐ

// 型アノテーションがない引数の場合、文字列が渡されると、この関数はNaNとなってしまう。
// amountにnumberの型アノテーションを付与することで、予測しない使われ方を回避する。
function expo(amount: number) {
  return amount ** 2;
}
// 10000
console.log(expo(100));
// Error! -> Argument of type '"hoge"' is not assignable to parameter of type 'number'.
// console.log(expo('hoge'))

// returnする内容を文字列とした場合、返却値の型アノテーションを指定していない場合、
// 期待値が数値だとするとエラーが発生する。
function fee(amount: number): number {
  return amount * 1.4;
}

// Type 'string' is not assignable to type 'number'.
// function price(amount: number): number {
//   return `${fee(amount)}`
// }

function price(amount: number): number {
  return fee(amount);
}
