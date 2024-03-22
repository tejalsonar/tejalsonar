function displayUserInfo() {
    let url = 'https://randomuser.me/api/';

    let proiseObjOne = fetch(url);

    //proiseObjOne.then()
    //.then()
    //.catch()

    //settlement of promiseObjOne
    let response = promiseObjOne;
    let promiseObjectForJson = response.json();

    //
    console.log("This is line number 13");
    console.log("The response is", response)
}