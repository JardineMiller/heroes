const Food = function(name, replenishmentValue) {
  this.name = name;
  this.replenishment = replenishmentValue;
  this.poisonous = false;
}

module.exports = Food;
