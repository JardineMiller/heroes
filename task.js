const Task = function(difficulty, urgency, reward) {
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.complete = false;
}

module.exports = Task;