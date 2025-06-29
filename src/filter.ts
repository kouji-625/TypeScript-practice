// 条件を満たす 数字の配列
export const numbers2 = [1, 2, 3, 4, 5];
// 偶数の値を抽出して新しい配列とする
export const even = numbers2.filter((i) => i % 2 === 0);
export const odd = numbers2.filter((i) => i % 2 === 1);

console.log(even, odd);


// 条件を満たさない 数字の配列
export const numbers3 = [1, 2, 3, 4, 5];
// 偶数の値を抽出して新しい配列とする
export const res = numbers3.filter((i) => i % 10 === 0);

console.log(res);

export const nums = [5, 8, 11, 14, 17];
export const numEven  = nums.filter((even) => even % 2 === 0);
console.log(numEven);

