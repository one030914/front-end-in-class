async function myDisplay() {
    let myPromise = new Promise(function (resolve, reject) {
        resolve("Hello world!");
    });
    console.log(await myPromise); // print "Hello world!"
}

myDisplay();
