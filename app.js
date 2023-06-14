'use strict'

/*
	сделать запрос на https://dummyjson.com/products/categories ,
	получить список категориц и отобразить <select> выбора категорий	
*/

const list = document.getElementById('categories');

function createSelect(options){
	const element = document.querySelector('.filter');
	element.innerHTML = `<select>
		${options.map(e => `<option value='${e}'>${e}</option>`)}
	</select>`
}

function getCategories(){
	fetch("https://dummyjson.com/products/categories")
    .then(res => res.json())
    .then(data => createSelect(data))
    .catch((err) => console.error(err))
    .finally(() => console.log("request categories completed"));
};

getCategories();