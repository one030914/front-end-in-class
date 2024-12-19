function myDisplayer(some) {
    console.log(some);
}

let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;// if x is 1, it will go to else and print "ERROR"

    // The producing code (this may take some time)

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function (value) {
        myDisplayer(value);
    },
    function (error) {
        myDisplayer(error);
    }
);
