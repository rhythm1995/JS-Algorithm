function sum(arr){
  var s=0;
  for(var i=arr.length-1;i>=0;i--){
    s+=arr[i];
  }
  return s;
}

var a;
a = sum([1,2,3,4]);
console.log(a);

//一定要先给s初值为0！
//一定要用i--形式的循环，不要用i++，否则最后一个会有问题
