'use strict'

function timer(sec){
	let countdown = sec * 1000;
	console.log(`${sec} seconds timer start!`);
	const interval = setInterval(() => {
		countdown -= 1000;
		console.log(`${countdown / 1000} seconds left`);
	}, 999);
	setTimeout(() => {
		clearInterval(interval);
		console.log("Your pizza is ready!");
		console.log(`${sec} seconds timer is over!`);
  }, countdown);
}

timer(15);