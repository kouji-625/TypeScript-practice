/*type User = { id: number; name: string };

const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

const names = users.map((user) => user.id);
console.log(names); */

type User = { id: number; name: string };

const users: User[] = [
  { id: 1, name: 'Luke' },
  { id: 2, name: 'Mike' },
];

const names = users.map((user) => user.id);
console.log(names);

export {};

const nums = [1, 2, 3, 4];
const num = nums.map((n) => n * 2);
console.log(num);

//奇数だけを3倍
/*const nums2 = [1, 2, 3, 4, 5];
const num2 =
  nums2.filter((n2) => n2 % 2 === 1);
const num2Even = num2.map((n3) => n3 * 3);
console.log(num2Even);*/


/*const nums2 = [1, 2, 3, 4, 5];
const num2 =
  nums2.filter((n2) =>{ n2 % 2 === 1;
const num2Even = num2.map((n3) => n3 * 3)});
console.log(num2Even);*/


