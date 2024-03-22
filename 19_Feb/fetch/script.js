let url = 'https://randomuser.me/api/';

function fetchRandomUser() {
    let promiseObjOne = fetch(url);

    console.log("The promiseObjOne is", promiseObjOne );

    promiseObjOne.then(dataIsReady);
    promiseObjOne.catch(dataIsNotReady);
}

function dateIsReady(apiCalling) {
    
}