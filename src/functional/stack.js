var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {}
  someInstance.count = 0;
  someInstance.storage = {};

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {}
  
stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  if (this.count > 0) {
    this.count--;
    var trash = this.storage[this.count];

    return trash;
  }
};

stackMethods.size = function() {
    return this.count;
};
