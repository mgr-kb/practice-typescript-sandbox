// const/letの型推論
// 型を明示せずに変数宣言をした場合、constとletで推論結果が異なる
// 基本的には、letはプリミティブ型への推論, constはLiteral Typesへの推論

// コメントはいずれも型推論結果
let userA = "Taro"; // string
let valueA = 1; // number
let flagA = true; // boolean

const userB = "Taro"; // 'Taro'
const valueB = 1; // 1
const flagB = true; // true
