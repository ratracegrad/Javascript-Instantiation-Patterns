var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    first: 0,
    last: 0,
  };

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.last] = value;
    this.last++;
  },

  dequeue: function() {
    if (this.last > this.first){
      var trash = this.storage[this.first];
      delete this.storage[this.first];
      this.first++;
      return trash;
    }
  },

  size: function() {
    return this.last - this.first;
  }

};
