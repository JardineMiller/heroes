// C. Create a constructor to create Food objects.

// Food should have a name
// Food should have a replenishment value

const assert = require('assert');
const Food = require('../food.js');

describe('Food test', function() {
  var food;

  beforeEach(function() {
    food = new Food("Cheese", 5);
  })

  it('should have a name', function() {
    assert.strictEqual(food.name, "Cheese");
  })

  it('should have a replenishment value', function() {
    assert.strictEqual(food.replenishment, 5);
  })

})