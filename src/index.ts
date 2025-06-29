import { table } from "console";

const message: string = "Hello, world";

console.log(message);

type User = { id: number; name: string };

const users: User[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
];

//map　すべての要素を変換
const names: string[] = users.map((user) => user.name);
console.log(names);// ['Alice', 'Bob']

//find 最初に条件に合う1つだけを返す　|はTypeScriptの「ユニオン型」「User型またはundefined型のどちらかになる」
//find は「一致する値がなければ undefined を返す」
const targetUser: User | undefined = users.find((user) => user.id ===2);
console.log(targetUser);// { id: 2, name: 'Bob' }

//filter
const filteredUsers: User[] =users.filter((user) => user.id > 1);
console.log(filteredUsers);//[{ id: 2, name: 'Bob' }]

//foreach
users.forEach((user) => {
    console.log('${user.name}さんのIDは${user.id}です');
});
// AliceさんのIDは1です
// BobさんのIDは2です