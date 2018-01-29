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
    food.poisonCheck();
    this.adjustHealth(food.finalReplenishmentValue(this));
  };

  Hero.prototype.isFavFood = function(food) {
    return food.name === this.favFood ? true : false;
  };

  Hero.prototype.adjustHealth = function(amount) {
    this.health += amount;
    this.checkMaximumHealth();
  };

  Hero.prototype.checkMaximumHealth = function() {
    if(this.health > 100) {
      this.health = 100;
    }
  };

  Hero.prototype.acceptTask = function(task) {
    this.tasks.push(task);
  };



  Hero.prototype.sortByDifficulty = function(list) {
    list.sort(function(first, next) {
      return first.difficulty > next.difficulty;
    })
  };

  Hero.prototype.sortByUrgency = function(list) {
    list.sort(function(first, next) {
      return first.urgency < next.urgency;
    })
  };

  Hero.prototype.sortByReward = function(list) {
    list.sort(function(first, next) {
      return first.reward.replenishment < next.reward.replenishment;
    })
  };

  Hero.prototype.completeTasks = function() {
    return this.tasks.filter(function(task) {
      return task.complete === true;
    })
  };

  Hero.prototype.incompleteTasks = function() {
    return this.tasks.filter(function(task) {
      return task.complete === false;
    })
  };


}

module.exports = Hero;