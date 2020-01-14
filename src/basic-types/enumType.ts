// 列挙型

// 数値列挙
// enumを用いて宣言する。
// 宣言した時点で自動的にインクリメントされる。
enum Direction {
  Up, // Direction.Up = 0
  Down, // Direction.Down = 1
  Left, // Direction.Left = 2
  Right // Direction.Right = 3
}

// 文字列列挙
// 数値列挙と似ているが、異なるのは、各値の列挙時にString Literal Typesで初期化する必要がある
enum Ports {
  USER_SERVICE = "8080",
  REGISTER_SERVICE = "8081",
  MEDIA_SERVICE = "8082"
}

// open ended # 同じ装飾名の宣言があった場合、自動的にマージされる機能のこと
// よって、以下のすべてのPortはマージされる
enum Port {
  USER_SERVICE = "8080"
}

enum Port {
  REGISTER_SERVICE = "8081"
}

enum Port {
  MEDIA_SERVICE = "8082"
}
