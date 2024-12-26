console.log("before");

const getUser = (id) => {
    console.log("Layer 1: waiting 1 second...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Get id: ${id}`);
            resolve({ id: id, name: "John" });
        }, 1000);
    });
};

const getRepos = (userName) => {
    console.log("Layer 2: waiting 2 second...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Get repos of user ${userName}`);
            resolve(["repo1", "repo2", "repo3"]);
        }, 2000);
    });
};

const getComments = (repos) => {
    console.log("Layer 3: waiting 3 second...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`repos data from remote: ${repos}`);
            resolve(["nice", "great", "have some bugs..."]);
        }, 3000);
    });
};

getUser(1)
    .then((user) => getRepos(user.name))
    .then((repos) => getComments(repos))
    .then((comments) => console.log(`repo of comments: ${comments}`));

console.log("after");
