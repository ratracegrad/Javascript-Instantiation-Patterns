var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.first = 0;
  this.last = 0;

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.last] = value;
  this.last++;
};

Queue.prototype.dequeue = function() {
  if (this.last > this.first) {
    var trash = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return trash;
  }
};

Queue.prototype.size = function() {
  return this.last - this.first;
};
