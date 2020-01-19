"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Promiseの型推論
// resolve関数の引数を指定する
function wait(duration) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${duration}ms passed`), duration);
    });
}
wait(1000).then(res => { }); // ここでresはstring型となっている
// async関数
// Promiseインスタンスを返す関数は、async関数の中でawaitすることでも適切な型推論が行われます
function queue() {
    return __awaiter(this, void 0, void 0, function* () {
        // 戻り値の推論はPromise<string>
        const message = yield wait(1000);
        return message;
    });
}
