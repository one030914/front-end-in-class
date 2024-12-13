console.log("before");

const getUser = (id, fn) => {
    setTimeout(() => {
        console.log(`Get id: ${id}`);
        fn({id: id, name: "John"});
    }, 2000);
};

const fn = (user) => {
    console.log(`user data from remote id: ${user.id}, name: ${user.name}`);
};

getUser(1, fn);
console.log("after");