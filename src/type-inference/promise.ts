// Promiseの型推論
// resolve関数の引数を指定する
function wait(duration: number): Promise<string> {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(`${duration}ms passed`), duration);
  });
}
wait(1000).then(res => {}); // ここでresはstring型となっている

// async関数
// Promiseインスタンスを返す関数は、async関数の中でawaitすることでも適切な型推論が行われます
async function queue() {
  // 戻り値の推論はPromise<string>
  const message = await wait(1000);
  return message;
}
