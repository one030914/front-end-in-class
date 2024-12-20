const p1 = new Promise((resolve, reject) => {
    console.log("P1 start...");
    setTimeout(() => {
        console.log("Async 1, from db1");
        resolve([1, 2]);
    }, 1000);
});

const p2 = new Promise((resolve, reject) => {
    console.log("P2 start...");
    setTimeout(() => {
        console.log("Async 2, from db2");
        resolve([3, 4]);
    }, 2000);
});

let time = new Date().getTime();
Promise.all([p1, p2]).then((result) => {
    console.log("Promise.all: ", result);
    const time2 = new Date().getTime();
    console.log("Promise.all run time: ", time2 - time);
});

time = new Date().getTime();

Promise.race([p1, p2]).then((result) => {
    console.log("Promise.race: ", result);
    const time2 = new Date().getTime();
    console.log("Promise.race run time: ", time2 - time);
});