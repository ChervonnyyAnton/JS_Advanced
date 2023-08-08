"use strict";

function myFetch(url, method) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open(method, url);
    request.send();

    request.addEventListener("load", function () {
      resolve(this.responseText);
    });

    request.addEventListener("error", function () {
      reject(new Error(this.status));
    });

    request.addEventListener("timeout", function () {
      reject(new Error("Timeout"));
    });
  });
}

myFetch("https://dummyjson.com/products", "GET")
  .then((data) => console.log(JSON.parse(data)))
  .catch((error) => console.error(error));
