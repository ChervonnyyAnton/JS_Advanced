'use strict'

let weatherMap = new Map([
	['London', 10],
	['Moscow', 7],
	['Paris', 14],
]);

weatherMap = [...weatherMap].map(el => el.reverse());