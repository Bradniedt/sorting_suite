function sortIt(array) {
  for(i = 0; i < array.length; i ++) {
    var one = array[i];
    var two = array[(i + 1)];
    if(one > two) {
      array[i] = two;
      array[(i+1)] = one;
    };
  };
  return array;
};

function check(array) {
  sorted = true;
  for(i = 0; i < array.length; i ++) {
    var one = array[i];
    var two = array[(i + 1)];
    if(one > two) {
      sorted = false;
    };
  };
  return sorted;
};

function bubbleSort(array) {
  while(check(array) == false) {
    sortIt(array);
  };
  return array;
};

exports.sortMe = function testSort(array) {
  while(check(array) == false) {
    sortIt(array);
  };
  return array;
};

exports.check = function(array) {
  sorted = true;
  for(i = 0; i < array.length; i ++) {
    var one = array[i];
    var two = array[(i + 1)];
    if(one > two) {
      sorted = false;
    };
  };
  return sorted;
};
