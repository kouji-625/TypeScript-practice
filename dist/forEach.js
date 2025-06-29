const numbers4 = [1, 2, 3];
const result4 = numbers4.forEach(n => {
    const doubled = n * 2;
    console.log(doubled);
    // でも return してないので値は戻らない
});
console.log(result4); // undefined
// 以下の数値配列の合計を計算してください。
// reduceは使わず、forEachで合計値を出すこと。
const prices = [100, 200, 300];
let total = 0;
prices.forEach(price => {
    total += price;
});
console.log(total);
export {};
