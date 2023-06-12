'use strict'

/*
	Получить среднюю цену 30 товаров из API
*/

const request = new XMLHttpRequest();
request.open('GET', 'https://dummyjson.com/products');
request.send();

request.addEventListener('load', function() {
	const { products } = JSON.parse(this.responseText);
	console.log(products);
	const sum = products.reduce((acc, prod) => acc += prod.price, 0);
	console.log(sum / products.length);
});