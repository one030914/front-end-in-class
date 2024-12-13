console.log("before");

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Get id: ${id}`);
            resolve({id: id, name: "John"});
        }, 2000);
    });
};

const getRepos = (userName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Get repos of user ${userName}`);
            resolve(['repo1', 'repo2', 'repo3']);
        }, 1000);
    });
};

const getComments = (repos) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`repos data from remote: ${repos}`);
            resolve(['nice', 'great', 'have some bugs...']);
        }, 1000);
    });
};

getUser(1)
    .then((user) => getRepos(user.name))
    .then((repos) => getComments(repos))
    .then((comments) => console.log(`repo of comments: ${comments}`));

console.log("after");