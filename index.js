let consoleForm = document.getElementById("consoleForm");
let requestUrl = document.getElementById("requestUrl");
let requestUrlErrMsg = document.getElementById("requestUrlErrMsg");
let requestMethod = document.getElementById("requestMethod");
let requestBody = document.getElementById("requestBody");
let responseStatus = document.getElementById("responseStatus");
let responseBody = document.getElementById("responseBody");
let sendRequestBtn = document.getElementById("sendRequestBtn");

consoleForm.addEventListener('click', (e) => {
    e.preventDefault();
});
requestMethod.addEventListener("change", () => {
    console.log('hello');
})
sendRequestBtn.addEventListener('click', () => {
    const url = requestUrl.value;
    const requestMethodValue = requestMethod.value;
    const requestBodyValue = requestBody.value;
    let data = requestBodyValue;
    let options = {
        method: requestMethodValue,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer db6f72390ca8b7c5d128b72883a2aae0bf1907e0b741fa5c3c93e97a6b0324cf"
        },
        body: data
    };
    fetch(url, options)
        .then((response) => {
            return response.json();
        }).then((jsonData) => {
            console.log(jsonData);
            responseStatus.value = jsonData.code;
            responseBody.value = JSON.stringify(jsonData.data);
        });
});