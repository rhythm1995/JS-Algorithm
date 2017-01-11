function arrayFindTwoMax(arr){
  var a,b;
  if (arr[0]>arr[1]) {
    a=arr[0];
    b=arr[1];
  } else {
    a=arr[1];
    b=arr[0];
  }

  for(var i=0;i<=arr.length-1;i++){
    if(arr[i]>a){
      b=a;
      a=arr[i];
    } else if (arr[i]<a && arr[i]>b) {
      b=arr[i];
    }
  }

  return a,b;
}

console.log(arrayFindTwoMax([1,2,3]));
