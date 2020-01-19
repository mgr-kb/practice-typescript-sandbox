"use strict";
// 絞り込みによる型安全
// JavaScriptの演算子・構文による従来の安全な処理を学ぶ上で、型がどのように絞り込まれるのか
// typeof type guards
// 渡された引数をzelo valueにする関数
// typeof演算子の条件式によって、valueの型が絞り込まれている
function reset(value) {
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
function judgeUserType(user) {
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
function judgeUserTypeTwo(user) {
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
function isUserJ(user) {
    return user.name !== undefined;
}
function isUserK(user) {
    return user.age !== undefined;
}
