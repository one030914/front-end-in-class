const a = [1,2,3,4,5,6];
let b = "";

a.forEach((n, i) => b += (i === 0 ? "" : ", ") + n);
console.log(b);

const square = a.map((n) => n * n);
console.log(square);

const sum = square.reduce((sum, n) => {return sum + n;});
console.log(sum);

const filter = a.filter((n) => n % 2 == 0);
console.log(filter);

const every = a.every((n) => n > 3);
console.log(every);

const some = a.some((n) => n > 5);
console.log(some);

const find = a.find((n) => n > 2);
console.log(find);

const findIndex = a.findIndex((n) => n < 6);
console.log(findIndex);