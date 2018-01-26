const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js');
const Task = require('../task.js');
const Rat = require('../rat.js');

describe('Hero test', function() {
  var rat;
  var hero;
  var food;
  var favFood;
  var easyTask;
  var mediumTask;
  var hardTask;
  var completedTask;

  beforeEach(function() {
    rat = new Rat();
    hero = new Hero("Captain Expendable", "Laser Cake", 100);
    food = new Food("Cheese", 5);
    cake= new Food("Cake", 7);
    favFood = new Food("Laser Cake", 10);
    easyTask = new Task(1, 1, food);
    mediumTask = new Task(3, 2, cake);
    hardTask = new Task(5, 5, favFood);
    completedTask = new Task(5, 5, favFood);
    completedTask.complete = true;
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

  it('eating favourite food will multiply the replenishment by 1.5', function() {
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
    hero.sortByDifficulty(hero.tasks);
    let expected = [easyTask, mediumTask, hardTask];
    assert.deepEqual(hero.tasks, expected);
  })

  it('can sort tasks by urgency', function() {
    hero.acceptTask(mediumTask);
    hero.acceptTask(hardTask);
    hero.acceptTask(easyTask);
    hero.sortByUrgency(hero.tasks);
    let expected = [hardTask, mediumTask, easyTask];
    assert.deepEqual(hero.tasks, expected);
  })

  it('can sort tasks by reward', function() {
    hero.acceptTask(mediumTask);
    hero.acceptTask(hardTask);
    hero.acceptTask(easyTask);
    hero.sortByReward(hero.tasks);
    let expected = [hardTask, mediumTask, easyTask];
    assert.deepEqual(hero.tasks, expected);
  })

  it('can find complete tasks', function() {
    hero.acceptTask(mediumTask);
    hero.acceptTask(hardTask);
    hero.acceptTask(easyTask);
    hero.acceptTask(completedTask);
    let expected = [completedTask];
    assert.deepEqual(hero.completeTasks(), expected);
  })

  it('can find incomplete tasks', function() {
    hero.acceptTask(mediumTask);
    hero.acceptTask(hardTask);
    hero.acceptTask(easyTask);
    hero.acceptTask(completedTask);
    let expected = [mediumTask, hardTask, easyTask];
    assert.deepEqual(hero.incompleteTasks(), expected);
  })

  it('loses health if eating a poisoned food', function() {
    hero.health = 80;
    rat.touch(food);
    hero.eat(food);
    assert.strictEqual(hero.health, 75);
  })

})