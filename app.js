'use strict'

let count = 0;
let index = 0;

const Product = function(name, amount){
	count++;
	this.id = count;
	this.name = name;
	this.amount = amount;
}

const Basket = function(){
	index++;
	this.id = index;
	this.products = [];
}

Basket.prototype.addProduct = function(product){
	if(this.products.find(p => p.id === product.id)){
		p.increaseBy(1);
	}

	this.products.push(product);
}

Basket.prototype.decrease = function (id) {
  this.products = this.products
  	.map((p) => {
    	if (p.id === id) {
      		p.amount--;
    	}
    	return p;
  	})
	.filter(p => p.amount > 0);
};

Basket.prototype.increase = function (id) {
  this.products = this.products.map(p => {
	if(p.id === id) {
		p.amount++;
	}
	return p;
  })
};

const bread = new Product('Bread', 1);
const newBasket = new Basket();

newBasket.addProduct(bread);
newBasket.increase(1);
newBasket.decrease(1);
newBasket.decrease(1);

console.log(newBasket);