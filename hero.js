const Hero = function(name, favFood, health) {
  this.name = name;
  this.favFood = favFood;
  this.health = health;
  this.maxHealth = health;
  this.tasks = [];

  Hero.prototype.talk = function() {
    return `I am ${this.name}!`;
  };

  Hero.prototype.eat = function(food) {
    this.increaseHealth(food.replenishment);
  };

  Hero.prototype.isFavFood = function(food) {
    return food.name === this.favFood ? true : false;
  };

  Hero.prototype.increaseHealth = function(amount) {
    this.health += amount;
    if(this.health > 100) {
      this.health = 100;
    }
  };

}

module.exports = Hero;