"use strict";

const goodUrl = "https://boredapi.com/api/activity";
const badUrl = "https://dummyjson.com/productss/";

const credentials = {
  username: "kminchelle",
  password: "0lelplR",
};

const headers = {
  "Content-Type": "application/json",
};

const method = "POST";

function request(method, headers, body) {
  return {
    method: method,
    headers: headers,
    body: JSON.stringify(body),
  };
}

async function main() {
  const response = await fetch(goodUrl, request(method, headers, credentials));
  const data = await response.json();
  console.log(data);
}

main();
