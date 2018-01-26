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
    let modifier = this.isFavFood(food);
    this.increaseHealth(food.replenishment * modifier);
  };

  Hero.prototype.isFavFood = function(food) {
    return food.name === this.favFood ? 1.5 : 1;
  };

  Hero.prototype.increaseHealth = function(amount) {
    this.health += amount;
    this.checkMaximumHealth();
  };

  Hero.prototype.checkMaximumHealth = function() {
    if(this.health > 100) {
      this.health = 100;
    }
  };

}

module.exports = Hero;