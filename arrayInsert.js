function insert(arr, item, index) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    newArray.push(arr[i]);
  }
  newArray.splice(index,0,item);
  return newArray;
}

console.log(insert([1, 2, 3, 4], 'z', 2));
