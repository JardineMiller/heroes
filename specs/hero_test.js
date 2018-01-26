const assert = require('assert');
const Hero = require('../hero.js');

describe('Hero test', function() {
  var hero;
  var food;

  beforeEach(function() {
    hero = new Hero("Captain Expendable", "Lasers", 100);
    food = new Food("Cheese", 5);
  })

  it('has a name, fav food and health when created', function() {
    assert.strictEqual(hero.name, "Captain Expendable");
    assert.strictEqual(hero.favFood, "Lasers");
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
    hero.eat(cheese);
    assert.strictEqual(hero.health, 95);
  })

})