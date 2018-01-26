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
}

module.exports = Food;
