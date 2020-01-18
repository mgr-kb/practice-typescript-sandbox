// Generics
// Genericsを用いると、型の決定を遅延することが可能

// Genericsを利用する型を宣言する場合、型名称に続いて<T>のようにしてエイリアスを指定できる
// 慣習として、T, U, Kなどが型エイリアスの名称として利用されるが、任意の名称を指定できる
/**
 * T :Type
 * K: Key
 * U: Unknown
 * E: Element
 */
interface Box<T> {
  value: T;
}
// const box0: Box = { value: 'hoge' } // Genericsを指定していないのでエラーになる
const box1: Box<string> = { value: "hoge" };

// 初期Generics
// 初期型の指定が可能
interface gBox<T = string> {
  value: T;
}
const gBox0: gBox = { value: "hoge" }; // 初期型(string)を指定しているので、エラーにならない
const gBox1: gBox<number> = { value: 1 }; // 初期型以外の型を指定することで上書き可能

// extendsによる制約
interface eBox<T extends string | number> {
  value: T;
}
const eBox0: eBox<string> = { value: "hoge" };
const eBox1: eBox<number> = { value: 1 };
// const eBox2: eBox<boolean> = { value: true }  // -> Type 'boolean' does not satisfy the constraint 'string | number'.

// 関数のGenerics
// 関数宣言時にGenericsを利用することで関数は引数型を未確定な型として扱うことが可能
function boxed<T>(props: T) {
  return { value: props };
}
// 関数型にGenericsが含まれていても、利用時の型指定は必須ではない
// 引数に与えられた値から、推論結果を得ることが可能
const fBox0 = boxed("test"); // -> const fBox0: { value: string; }
const fBox1 = boxed(1); // -> const fBox1: { value: number; }

// アサーションによる明示的な型の付与
const fBox2 = boxed(false as boolean | null); // -> const fBox2: { value: boolean | null; }
const fBox3 = boxed<string | null>(null); // -> const fBox3: { value: string | null; }

// extendsによる制約
// 変数と同様にextendsシグネチャを付与することで指定可能な型を制約できる
function eBoxed<T extends string>(props: T) {
  return { value: props };
}
// const exBox1 = eBoxed(0) // -> Argument of type '0' is not assignable to parameter of type 'string'.
const exBox2 = eBoxed("hoge");

// 複数のGenerics
// 以下の例だと、第2引数に付与されたK型が、第1引数のプロパティ名称であることが確約される。(keyofを使っているので)
function pick<T, K extends keyof T>(props: T, key: K) {
  return props[key];
}
const obj = {
  name: "Taro",
  amount: 0,
  flag: false
};
const pickVal0 = pick(obj, "name"); // const pickVal0: string
const pickVal1 = pick(obj, "amount"); // const pickVal1: number
const pickVal2 = pick(obj, "flag"); // const pickVal2: boolean
// const pickVal3 = pick(obj, 'hoge') // -> Argument of type '"hoge"' is not assignable to parameter of type '"name" | "amount" | "flag"'.
/**
 * ちなみに、pick関数にオブジェクトを一つ渡すと、第二引数の推論もしっかりされる。
 * 上記の例で言えば、objを渡すとこうなる
 * pick(props: { name: string; amount: number; flag: boolean; }, key: "name" | "amount" | "flag"): string | number | boolean
 */

// クラスのGenerics
// クラスの宣言にGenericsを用いると、コンストラクタの引数を制約できる
// 以下の例であれば、stringのみしか受け付けないことになる。
class Person<T extends string> {
  name: T;
  constructor(name: T) {
    this.name = name;
  }
}
const person = new Person("Taro");
const personName = person.name; // const personName: "Taro"

// オブジェクトを引数にとる場合、以下のようになる
// コンストラクタにPersonPropsの制約が設けられているので、
// クラスメンバーにIndexed Access Typesを利用した型の付与が可能
interface PersonProps {
  name: string;
  age: number;
  gender: "male" | "female" | "other";
}
class Persons<T extends PersonProps> {
  name: T["name"];
  age: T["age"];
  gender: T["gender"];
  constructor(props: T) {
    this.name = props.name;
    this.age = props.age;
    this.gender = props.gender;
  }
}
const persons = new Persons({
  name: "Taro",
  age: 10,
  gender: "male"
});
