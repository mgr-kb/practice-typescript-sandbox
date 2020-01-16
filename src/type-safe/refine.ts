// 絞り込みによる型安全
// JavaScriptの演算子・構文による従来の安全な処理を学ぶ上で、型がどのように絞り込まれるのか

// typeof type guards
// 渡された引数をzelo valueにする関数
// typeof演算子の条件式によって、valueの型が絞り込まれている
function reset(value: number | string | boolean) {
  const v0 = value; // : number | string | boolean
  if (typeof value === "number") {
    const v1 = value; // :number
    return 0;
  }
  const v2 = value; // : string | boolean
  if (typeof value === "string") {
    const v3 = value; // :string
    return "";
  }
  const v4 = value; // :boolean
  return false;
}
console.log(reset(1)); // 0
console.log(reset("1")); // ''
console.log(reset(true)); // false

// in type guards
type User = { gender: string };
type UserA = User & { name: string };
type UserB = User & { age: number; graduate: string };

function judgeUserType(user: UserA | UserB) {
  if ("gender" in user) {
    const u0 = user; // :UserA | UserB
    console.log("user type is UserA or UserB");
  }
  if ("name" in user) {
    const u1 = user; // :UserA
    console.log("user type is UserA");
    return; // 早期returnによる絞り込み推論
  }
  const u2 = user; // :UserB
  console.log("user type is UserB");
}

// instanceof も、typeof同様の絞り込みが可能

// タグ付きUnion Types
// プロパティの型がLiteral Typesである場合、条件分岐による型の絞り込みが可能
type UserX = { gender: "male"; name: string };
type UserY = { gender: "female"; age: number };
type UserZ = { gender: "other"; graduate: string };
function judgeUserTypeTwo(user: UserX | UserY | UserZ) {
  switch (user.gender) {
    case "male":
      const u0 = user; // :UserX
      return "user type is UserX";
    case "female":
      const u1 = user; // :UserY
      return "user type is UserY";
    case "other":
      const u2 = user; // :UserZ
      return "user type is UserZ";
    default:
      const u3 = user; // :never
      return "user type is never";
  }
}

// ユーザー定義type guards
// 引数 is type という構文で匿名関数の戻り型アノテーションに利用する。
// この関数を利用すると、与えられる引数がanyでもその条件を通過したブロックではその型であると推論適用される。
// この構文によるType Guardは引数any型とUserJ | UserKに互換性があるため可能
// この構文を利用する場合は「TypeScriptがプログラマーの保証を信じて推論適用する」ということ
type UserI = { gender: string; [k: string]: any };
type UserJ = UserI & { name: string };
type UserK = UserI & { age: number };

function isUserJ(user: UserJ | UserK): user is UserJ {
  return user.name !== undefined;
}
function isUserK(user: UserJ | UserK): user is UserK {
  return user.age !== undefined;
}
