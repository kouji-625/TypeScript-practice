/*// 1. 条件を満たす 数字の配列
const numbers = [1, 2, 3, 4, 5];
// 2より大きい値を取得する(最初にヒットした値を取得する)
const result = numbers.find((i) => i > 2);

// 期待値： 3
console.log(result);


//2. 条件を満たさない  数字の配列
const numbers = [1, 2, 3, 4, 5];
// 10より大きい値を取得する
const result = numbers.find((i) => i > 10);

// 期待値： undefined
console.log(result);
 
//3. 条件を満たさないかつ undefined を返さない　 数字の配列
const numbers = [1, 2, 3, 4, 5];
// 10より大きい値を取得する
const result = numbers.find((i) => i > 10) ?? false;

// 期待値： false
console.log(result);*/


/*const numbers: number[] = [1, 2, 3, 4, 5];
const result = numbers.find((num) => num < 4);
console.log(result);*/

const numbers: number[] = [1, 2, 3, 4, 5];
const result = numbers.find((num) => num > 2) ?? false;
console.log(result);

export {};

type User = {
  id: number;
  name: string;
  age: number;
};

const users: User[] = [
  { id: 1, name: "Taro", age: 25 },
  { id: 2, name: "Jiro", age: 18 },
  { id: 3, name: "Hanako", age: 30 },
];

// 最初に見つかった「20歳未満」のユーザーを返す
// result: { id: 2, name: "Jiro", age: 18 }
export const userAge = users.find((user) => user.age < 20);
console.log(userAge);
