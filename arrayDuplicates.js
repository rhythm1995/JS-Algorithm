function duplicates(arr) {
  var a=[],b=[];
  for(var i=0;i<arr.length;i++){
    if(!b[arr[i]]){
      b[arr[i]] = 1;
      continue;
    }
    b[arr[i]]++;
  }
  for(var i = 0;i<b.length;i++){
    if(b[i]>1){
      a.push(i);
    }
  }
  return a;
}
