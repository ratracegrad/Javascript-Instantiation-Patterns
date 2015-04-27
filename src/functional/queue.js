var Queue = function(){
  var someInstance = {};
  var last = 0;
  var first = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[last] = value;
    last++;
  };

  someInstance.dequeue = function(){
    if (last > first){
      var trash = storage[first];
      delete storage[first];
      first++;
      return trash;
    }
  };

  someInstance.size = function(){
    return last - first;
  };

  return someInstance;
};
