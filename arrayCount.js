function count(arr, item) {
  var s=0;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i]==item){
      s++
    }
  }
  return s;
}
