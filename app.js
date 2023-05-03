'use strict'

const exchangeUnit = 1;

const RUBEL = {
  name: "rubel",
  format: "ru-RU",
  exchange: exchangeUnit * 1,
  printOption: {
    style: "currency",
    currency: "RUB",
  },
};

const DOLLAR = {
  name: "dollar",
  format: "en-US",
  exchange: exchangeUnit * 60,
  printOption: {
    style: "currency",
    currency: "USD",
  },
};

const EURO = {
  name: "euro",
  format: "eu-AT",
  exchange: exchangeUnit * 80,
  printOption: {
    style: "currency",
    currency: "EUR",
  },
};

const currencies = new Array(EURO.name, DOLLAR.name, RUBEL.name);

function convertCurrency(input, output, amount) {
	if(currencies.find(e => e === input.name) 
	|| currencies.find(e => e === output.name) 
	|| isNaN(amount))
	{
		return new Intl.NumberFormat(
			output.format,
			output.printOption)
			.format(
      			(input.exchange / output.exchange) * amount);
	}
	else {
		return null;
	}
	
}

console.log(convertCurrency(EURO, RUBEL, 100));
console.log(convertCurrency(EURO, DOLLAR, 100));
console.log(convertCurrency(EURO, EURO, 100));
console.log(convertCurrency(DOLLAR, RUBEL, 100));
console.log(convertCurrency(DOLLAR, DOLLAR, 100));
console.log(convertCurrency(DOLLAR, EURO, 100));
console.log(convertCurrency(RUBEL, RUBEL, 100));
console.log(convertCurrency(RUBEL, DOLLAR, 100));
console.log(convertCurrency(RUBEL, EURO, 100));
