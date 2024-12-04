let a = 0;
const n = 10;

console.log("%d\n", a);

console.log(n + "\n");

for(let i = 0; i < 10; i++){
    console.log(i);
    console.log(square(i));
}

function square(x){
    return x * x;
}