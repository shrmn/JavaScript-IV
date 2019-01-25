/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
  constructor (GameObjectAttrs) {
  this.createdAt = Date();
  this.dimensions = GameObjectAttrs.dimensions;  
  }

  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

class CharacterStats extends GameObject {
  constructor (statsAttrs) {
    super (statsAttrs);
    this.healthPoints = statsAttrs.healthPoints;
    this.name = statsAttrs.name;
  }

  takeDamage () {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStats {
  constructor (humanoidAttrs) {
    super (humanoidAttrs);
    this.team = humanoidAttrs.team;
    this.weapons = humanoidAttrs.weapons;
    this.language = humanoidAttrs.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// STRETCH

/*

function Hero(heroAttrs) {
  Humanoid.call(this, heroAttrs);  
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.heroicDeed = function(target) {    
  if ( target.healthPoints > 0) {
    target.healthPoints += -1;    
  } else {
    return `This person is already dead!`;
  };
  if (target.healthPoints > 0) {
    return `${this.name} has wounded ${target.name} for 1hp! ${target.name} has ${target.healthPoints} remaining!`;
  } else if (target.healthPoints === 0) {
    return `${this.name} has slain ${target.name}!`;
  };
}

// Villain constructor

function Villain(villainAttrs) {
  Humanoid.call(this, villainAttrs);    
}

Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.villainousAct = function(target) {  
  if ( target.healthPoints > 0) {
    target.healthPoints += -1;    
  } else {
    return `This person is already dead!`;
  };
  if (target.healthPoints > 0) {
    return `${this.name} has wounded ${target.name} for 1hp! ${target.name} has ${target.healthPoints} remaining!`;
  } else if (target.healthPoints === 0) {
    return `${this.name} has slain ${target.name}!`;
  };
}

// Hero and Villain examples


const protagonist = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 5,
  name: 'Sir Tain',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const antagonist = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 4,
  name: 'Sir Lee',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

console.log(antagonist.greet());
console.log(protagonist.greet());
console.log(antagonist.villainousAct(protagonist));
console.log(protagonist.heroicDeed(antagonist));
console.log(antagonist.villainousAct(protagonist));
console.log(protagonist.heroicDeed(antagonist));
console.log(antagonist.villainousAct(protagonist));
console.log(protagonist.heroicDeed(antagonist));
console.log(antagonist.villainousAct(protagonist));
console.log(protagonist.heroicDeed(antagonist));

*/