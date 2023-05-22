'use strict'

/*
	Сделать класс врага со здоровьем и методом получения урона.
	Сделать клаcc меча, который имеет силу и метод нанесения урона.
	Сделать класс орка, который в 50% случаев не получает урон.
*/

class Enemy {
	health;
	constructor(health){
		this.health = health;
	}

	receiveDamage(damage){
		this.health = this.health - damage;
		console.log(this.health);
	}
}

class Weapon {
	#damage;
	constructor(damage){
		this.#damage = damage;
	}

	dealDamageTo(enemy) {
		enemy.receiveDamage(this.#damage);
	}
}

class Orc extends Enemy {
	constructor(health){
		super(health);
	}

	receiveDamage(damage) {
		if(Math.random() > 0.5){
			this.health = this.health - damage;
		}
		console.log(this.health);
	}
}

const AngryOrk = new Orc(100);
const Sword = new Weapon(10);

Sword.dealDamageTo(AngryOrk);
Sword.dealDamageTo(AngryOrk);
Sword.dealDamageTo(AngryOrk);
Sword.dealDamageTo(AngryOrk);
Sword.dealDamageTo(AngryOrk);
Sword.dealDamageTo(AngryOrk);
Sword.dealDamageTo(AngryOrk);
Sword.dealDamageTo(AngryOrk);
Sword.dealDamageTo(AngryOrk);
Sword.dealDamageTo(AngryOrk);
Sword.dealDamageTo(AngryOrk);
Sword.dealDamageTo(AngryOrk);
Sword.dealDamageTo(AngryOrk);