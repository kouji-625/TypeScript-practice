const numbers4 = [1, 2, 3];
const result4 = numbers4.forEach(n => {
  const doubled = n * 2;
  console.log(doubled);
});

console.log(result4); // undefined

export {};



const prices = [100, 200, 300];
let total = 0;

prices.forEach(price => {
  total += price;
});

console.log(total); 
