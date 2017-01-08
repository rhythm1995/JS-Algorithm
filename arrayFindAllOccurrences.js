function findAllOccurrences(arr, target) {
  var position = [];
  for (var i in arr) {
    if(arr[i]==target){
      position.push(i);
    }
  }
  return position;
}

console.log(findAllOccurrences('abcdefabc'.split(''), 'a').sort());
