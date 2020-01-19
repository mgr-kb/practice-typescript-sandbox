"use strict";
// Conditional Types
// 型の互換性を条件分岐にかけ、型推論を導出する型のこと
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 部分的な型抽出
// inferシグネチャを用いることで、部分的な型抽出が可能になる (Type Inference in Conditional Types)
// 以下の例だと
// greetという'Hello'を返す関数がある
// Return型の動き的には、 '(...args: any[]) => infer U' という、"関数型かつ、戻り型(U)がある"型であれば、その戻り型を返すという意味になる
//
function greet() {
    return "Hello!";
}
// 引数型の抽出
function greet2(name, age) {
    return `Hello, I'm ${name}. ${age} years old.`;
}
// Promise.resolve引数型の抽出
function greetPromise() {
    return __awaiter(this, void 0, void 0, function* () {
        return "Hello";
    });
}
