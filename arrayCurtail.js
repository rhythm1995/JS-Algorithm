function curtail(arr) {
  var newArray = [];
  newArray = arr.slice(1,arr.length);
  return newArray;
}
console.log(curtail([1, 2, 3, 4]));
