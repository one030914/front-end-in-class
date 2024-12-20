console.log("before");

const getUser = (id) => {
    console.log("Layer 1: waiting 1 second...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Get id: ${id}`);
            resolve({id: id, name: "John"});
        }, 1000);
    });
};

const getRepos = (userName) => {
    console.log("Layer 2: waiting 2 second...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Get repos of user ${userName}`);
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
};

const getComments = (repos) => {
    console.log("Layer 3: waiting 3 second...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`repos data from remote: ${repos}`);
            resolve(['nice', 'great', 'have some bugs...']);
        }, 3000);
    });
};

const showComments = async () => {
    const user = await getUser(1);
    console.log(user);
    const repos = await getRepos(user.name);
    console.log(repos);
    const comments = await getComments(repos[1]);
    console.log(comments);
};

showComments();

console.log("after");
