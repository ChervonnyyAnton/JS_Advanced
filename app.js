"use strict";

const page = {
  element: document.getElementById("list"),
};

const baseUrl = "https://dummyjson.com";

function createSelect(element, array) {
  element.innerHTML = `<select>
		${array.map((el) => `<option value= ${el}>${el}</option>`).join("")}
	</select>`;
}

function createError(element, error) {
  element.innerHTML = `<div>
        <span> There is </span>
        <span> ${error} </span>
	    </div>`;
}

function getData(url, error) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    return response.json();
  });
}

function getCategories() {
  getData(`${baseUrl}/products/categories`, "Can not get products!")
    .then((data) => createSelect(page.element, data))
    .catch((error) => createError(page.element, error))
    .finally(() => console.log("complete"));
}

document.addEventListener("DOMContentLoaded", function () {
  getCategories();
});
