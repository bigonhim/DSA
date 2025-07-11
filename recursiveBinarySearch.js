//To perform a binary search you need to first sort the given array.
const arr = [2, 43, 23, 4, 1, 53];
console.log("Before Sort : ", arr);

const sort = (x) => {
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x.length - 1; j++) {
      if (x[j + 1] < x[j]) {
        let temp = x[j];
        x[j] = x[j + 1];
        x[j + 1] = temp;
      }
    }
  }
  return x;
};
console.log("After Sort : ", sort(arr));


// This is a recursive approach to this  very method.
const recursiveBs = (x,left,right,key) => {
  if(left > right){
    return;
  }
  const mid = Math.floor((left + right) / 2);
  if(x[mid] === key){
    return true;
  }
  if(x[mid] < key){
    return recursiveBs(x, mid+1,right ,key);
  }
  return recursiveBs(x,left,mid-1,key);
}

console.log(recursiveBs(arr,0,arr.length -1,21)); 