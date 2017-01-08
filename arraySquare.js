function square(arr) {
  var newArray = [];
  for (var i in arr) {
    var s=arr[i]*arr[i];
    newArray.push(s);
  }
  return newArray;
}

console.log(square([1, 2, 3, 4]));
