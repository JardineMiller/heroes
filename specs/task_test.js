const assert = require('assert');
const Task = require('../task.js');

describe('Task test', function() {
  var task;

  beforeEach(function() {
    task = new Task(5, 5, 500);
  })

  it('should have a difficulty, urgency and reward when created', function() {
    assert.strictEqual(task.difficulty, 5);
    assert.strictEqual(task.urgency, 5);
    assert.strictEqual(task.reward, 500);
  })

  it('should not be complete when created', function() {
    assert.strictEqual(task.complete, false);
  })

  it('should be able to be set as complete', function() {
    task.complete = true;
    assert.strictEqual(task.complete, true);

  })

})