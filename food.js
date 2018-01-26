const Food = function(name, replenishmentValue) {
  this.name = name;
  this.replenishment = replenishmentValue;
  this.poisonous = false;

  Food.prototype.isPoisoned = function() {
    return this.poisonous ? true : false;
  };

  Food.prototype.applyNegativeReplenishment = function() {
    this.replenishment = -this.replenishment;
  };

  Food.prototype.poisonCheck = function() {
    if(this.isPoisoned()) {
      this.applyNegativeReplenishment();
    }
  };

  Food.prototype.applyFoodModifer = function(hero) {
    return hero.isFavFood(this) ? 1.5 : 1;
  };
}

module.exports = Food;
