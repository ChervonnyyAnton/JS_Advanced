"use strict";

const prom = new Promise((resolve, reject) => {
  if (new Date() < new Date("01/01/2022")) {
    reject(new Error("Error"));
  }
  resolve("Success");
});

prom.then((data) => console.log(data)).catch((error) => console.log(error));

function timeout(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

timeout(1)
  .then(() => {
    console.log("timeout works");
  })
  .then(() => {
    console.log("timeout works");
  })
  .then(() => {
    console.log("timeout works");
  });
