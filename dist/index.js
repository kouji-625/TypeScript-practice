const message = "Hello, world";
console.log(message);
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
];
//map　すべての要素を変換
const names = users.map((user) => user.name);
console.log(names); // ['Alice', 'Bob']
//find 最初に条件に合う1つだけを返す　|はTypeScriptの「ユニオン型」「User型またはundefined型のどちらかになる」
//find は「一致する値がなければ undefined を返す」
const targetUser = users.find((user) => user.id === 2);
console.log(targetUser); // { id: 2, name: 'Bob' }
//filter
const filteredUsers = users.filter((user) => user.id > 1);
console.log(filteredUsers); //[{ id: 2, name: 'Bob' }]
//foreach
users.forEach((user) => {
    console.log('${user.name}さんのIDは${user.id}です');
});
export {};
// AliceさんのIDは1です
// BobさんのIDは2です
