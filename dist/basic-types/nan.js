"use strict";
// NaNを防ぐ
function expo(amount) {
    return Math.pow(amount, 2);
}
//
console.log(expo(100));
// Argument of type '"hoge"' is not assignable to parameter of type 'number'.
// console.log(expo('hoge'))
