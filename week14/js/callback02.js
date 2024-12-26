console.log("before");

const getUser = (id, fn) => {
    console.log("Layer 1: waiting 1 second...");
    setTimeout(() => {
        console.log(`Get id: ${id}`);
        fn({ id: id, name: "John" });
    }, 1000);
};

const getRepos = (usName, fn) => {
    console.log("Layer 2: waiting 2 seconds...");
    setTimeout(() => {
        console.log(`Get repos of user ${usName}`);
        fn(["repo1", "repo2", "repo3"]);
    }, 2000);
};

const getComments = (repo, fn) => {
    console.log("Layer 3: waiting 3 seconds...");
    setTimeout(() => {
        console.log(`Get repo comment: ${repo}`);
        fn(["nice", "great", "have some bugs..."]);
    }, 3000);
};

const fn1 = (user) => {
    console.log(`user id: ${user.name}, id: ${user.id}`);
    getRepos(user.name, fn2);
};

const fn2 = (repos) => {
    console.log(`repos data from remote: ${repos}`);
    getComments(repos[1], fn3);
};

const fn3 = (comments) => {
    console.log(`repo of comments: ${comments}`);
};

getUser(1, fn1);
console.log("after");
