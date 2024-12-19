console.log("before");

const getUser = (id, fn) => {
    console.log("wait 2 seconds...");
    setTimeout(() => {
        console.log(`Get id: ${id}`);
        fn({id: id, name: "John"});
    }, 2000);// 2000 milliseconds
};

const fn = (user) => {
    console.log(`user data from remote id: ${user.id}, name: ${user.name}`);
};

getUser(1, fn);
console.log("after");
