function remove(arr,item){
  var newArr=[];
  for(var i=0;i<arr.length;i++){
    if(arr[i]!=item){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(remove([1, 2, 3, 4, 2], 2));

//要用i<arr.length,不要用i<=arr.length
