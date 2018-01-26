const Hero = function(name, favFood, health) {
  this.name = name;
  this.favFood = favFood;
  this.health = health;
  this.tasks = [];

  Hero.prototype.talk = function(first_argument) {
    return `I am ${this.name}!`;
  };

}

module.exports = Hero;