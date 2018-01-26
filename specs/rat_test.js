const assert = require('assert');
const Rat = require('../rat.js');
const Food = require('../food.js');

describe('Rat tests', function() {
  var rat;
  var food;

  beforeEach(function() {
    rat = new Rat();
    food = new Food("Cheese", 5);
  })

  it('can poison food', function(){
    assert.strictEqual(food.poisonous, false);
    rat.touch(food);
    assert.strictEqual(food.poisonous, true);
  })

})