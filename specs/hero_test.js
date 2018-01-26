const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js');
const Task = require('../task.js');

describe('Hero test', function() {
  var hero;
  var food;
  var favFood;
  var easyTask;
  var mediumTask;
  var hardTask;

  beforeEach(function() {
    hero = new Hero("Captain Expendable", "Laser Cake", 100);
    food = new Food("Cheese", 5);
    favFood = new Food("Laser Cake", 10);
    easyTask = new Task(1, 1, food);
    mediumTask = new Task(3, 2, food);
    hardTask = new Task(5, 5, favFood);
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
    assert.strictEqual(hero.isFavFood(favFood), 1.5);
  })

  it('eating favourite food will double the replenishment', function() {
    hero.health = 50;
    hero.eat(favFood);
    assert.strictEqual(hero.health, 65);
  })

  it('can add a task', function() {
    hero.acceptTask(easyTask);
    assert.strictEqual(hero.tasks.length, 1);
    assert.strictEqual(hero.tasks[0].difficulty, 1);
    assert.strictEqual(hero.tasks[0].urgency, 1);
    assert.strictEqual(hero.tasks[0].reward, food);
  })

  it('can sort tasks by difficulty', function() {
    hero.acceptTask(mediumTask);
    hero.acceptTask(hardTask);
    hero.acceptTask(easyTask);
    hero.sortTasksByDifficulty();
    let expected = [easyTask, mediumTask, hardTask];
    assert.deepEqual(hero.tasks, expected);
  })

})