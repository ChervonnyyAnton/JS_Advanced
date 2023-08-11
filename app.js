"use strict";

const goodUrl = 'https://dummyjson.com/products/';
const badUrl = 'https://dummyjson.com/productss/';


async function getProducts(id, url) {
  let response;

  if(id === null || id === undefined)
  {
    response = await fetch(url);
  }
  else
  {
    response = await fetch(url + id);
  }

  return response.json();
}

async function main() {
  const result_1 = await Promise.all([
    getProducts(1, goodUrl),
    getProducts(2, goodUrl),
    getProducts(3, goodUrl)
  ]);

  console.log(result_1);

  const result_2 = await Promise.allSettled([
    getProducts(4, goodUrl),
    getProducts(5, badUrl),
    getProducts(6, goodUrl)
  ]);

    console.log(result_2);

    const result_3 = await Promise.race([
    getProducts(7, goodUrl),
    getProducts(8, goodUrl),
    getProducts(9, goodUrl)
  ]);

    console.log(result_3);
}

main();