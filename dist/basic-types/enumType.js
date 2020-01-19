"use strict";
// 列挙型
// 数値列挙
// enumを用いて宣言する。
// 宣言した時点で自動的にインクリメントされる。
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; // Direction.Right = 3
})(Direction || (Direction = {}));
// 文字列列挙
// 数値列挙と似ているが、異なるのは、各値の列挙時にString Literal Typesで初期化する必要がある
var Ports;
(function (Ports) {
    Ports["USER_SERVICE"] = "8080";
    Ports["REGISTER_SERVICE"] = "8081";
    Ports["MEDIA_SERVICE"] = "8082";
})(Ports || (Ports = {}));
// open ended # 同じ装飾名の宣言があった場合、自動的にマージされる機能のこと
// よって、以下のすべてのPortはマージされる
var Port;
(function (Port) {
    Port["USER_SERVICE"] = "8080";
})(Port || (Port = {}));
(function (Port) {
    Port["REGISTER_SERVICE"] = "8081";
})(Port || (Port = {}));
(function (Port) {
    Port["MEDIA_SERVICE"] = "8082";
})(Port || (Port = {}));
