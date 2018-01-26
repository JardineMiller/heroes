const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js');

describe('Hero test', function() {
  var hero;
  var food;
  var favFood;

  beforeEach(function() {
    hero = new Hero("Captain Expendable", "Laser Cake", 100);
    food = new Food("Cheese", 5);
    favFood = new Food("Laser Cake", 10);
  })

  it('has a name, fav food and health when created', function() {
    assert.strictEqual(hero.name, "Captain Expendable");
    assert.strictEqual(hero.favFood, "Laser Cake");
    assert.strictEqual(hero.health, 100);
  })

  it('has an empty collection of tasks when created', function() {
    assert.strictEqual(hero.tasks.length, 0);
  })

  it('can talk', function() {
    assert.strictEqual(hero.talk(), "I am Captain Expendable!")
  })

  it('should be able to eat food', function() {
    hero.health = 90;
    hero.eat(food);
    assert.strictEqual(hero.health, 95);
  })

  it('cannot go over maximum health value', function() {
    hero.eat(food);
    assert.strictEqual(hero.health, 100);
  })

  it('it can check for favourite food', function() {
    assert.strictEqual(hero.isFavFood(favFood), true);
  })

})