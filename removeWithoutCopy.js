function removeWithoutCopy(arr,item){
   for(i=arr.length-1; i>=0; i--) {
    if (arr[i]==item) {
      arr.splice(i,1);
    }
  }
  return arr;
}
console.log(removeWithoutCopy([1,2,2,3,4,2,2],2));
