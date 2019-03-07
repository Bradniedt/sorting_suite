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
