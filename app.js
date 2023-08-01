"use strict";

/*
fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then(({ products }) => {
    console.log(products);
    return fetch(`https://dummyjson.com/products/${products[0].id}`);
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("completed"));
*/

function createSelect(array) {
  const element = document.querySelector(".filter");
  element.innerHTML = `<select>
		${array.map((el) => `<option value= ${el}>${el}</option>`)}
	</select>`;
}

function getCategories() {
  fetch("https://dummyjson.com/products/categories")
    .then((response) => response.json())
    .then((data) => createSelect(data))
    .catch((error) => console.log(error))
    .finally(() => console.log("complete"));
}

getCategories();
